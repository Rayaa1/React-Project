import React, { useState, useEffect, useContext } from 'react';
import { cartService } from '../../services/cartService';
import { useNavigate } from 'react-router-dom';
import "./cart.css"
import AuthContext from '../../contexts/authContext.jsx';
 
const CartPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const { userId } = useContext(AuthContext);
  const [totalPrice, setTotalPrice] = useState(0);
  
  useEffect(() => {
    const fetchCart = async () => {
      const result = await cartService.getCart();
      const userCart = result.filter(item => item._ownerId  === userId);
      
      setCart(userCart);

      const total = userCart.reduce((acc, item) => acc + Number(item.price), 0);
      setTotalPrice(total);
      
    };
 
    fetchCart();
  }, [userId]);
 
 
  const handleRemoveFromCart = async (productId) => {
    await cartService.removeFromCart(productId);
    navigate('/products');
  }
  const handleCheckout =async () => {
    alert('Order confirmed! Thank you for shopping!');
    await clearCart();

  }
  const clearCart = async () => {
    setCart([]); 
    setTotalPrice(0); 
  };
 
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.productId} className="cart-item">
                <div className="item-title">
                  <span>{item.title}</span>
                </div>
                <div className="item-price">
                  <span>${item.price}</span>
                </div>
                <div className="item-image">
                  <img
                    src={item.imageUrl}
                    style={{ width: '200px', height: '200px' }}
                  />
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveFromCart(item._id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="total-price">
            <p>Total: ${totalPrice}</p>
          </div>
          <button className="btn custom-btn cart-btn" onClick={() => handleCheckout(userId)}>
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
};
 
export default CartPage;
