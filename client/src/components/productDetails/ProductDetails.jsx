import { useContext, useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as productService from '../../services/productsService';
import * as reviewService from '../../services/reviewService';
import "./productDetails.css"
import reducer from './reviewsReducer';
import useForm from '../../hooks/useForm';
import { cartService } from '../../services/cartService';
import { Link } from 'react-router-dom';
import AuthContext from "../../contexts/authContext.jsx";
import StarRating from "../starRating/StarRating.jsx";



const ProductDetails = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const { name, userId } = useContext(AuthContext);
  const [reviews, dispatch] = useReducer(reducer, []);
  const [selectedRating, setSelectedRating] = useState(0);
  const [isProductInCart, setIsProductInCart] = useState(false);


  const { productId } = useParams();
  useEffect(() => {
    productService.getOne(productId)
      .then(setProduct);
    reviewService.getAll(productId)
      .then((result) => {
        dispatch({
          type: 'GET_ALL_REVIEWS',
          payload: result,
        });
        
      });
      const checkProductInCart = async () => {
        const cartData = await cartService.getCart();
        setIsProductInCart(cartData.some(item => item.productId === productId));
      };
  
      checkProductInCart();
  

  }, [productId]);
  const addReviewHandler = async (values) => {
    const newReview = await reviewService.create(
      product._id,
      values.review,
      selectedRating

    );

    newReview.owner = { name };

    dispatch({
      type: 'ADD_REVIEW',
      payload: newReview
    })
    setSelectedRating(0);
    navigate("/products")
  }


  const deleteButtonClickHandler = async () => {
    const hasConfirmed = confirm(`Are you sure you want to delete ${product.title}`);

    if (hasConfirmed) {
      await productService.remove(productId);

      navigate('/products');
    }
  }

  const deleteReviewHandler = async (reviewId) => {
    const hasConfirmed = confirm("Are you sure you want to delete this review?");

    if (hasConfirmed) {


      dispatch({
        type: 'DELETE_REVIEW',
        payload: reviewId,
      });


      await reviewService.remove(reviewId);
    }

  };
  
  const handleAddToCart = async () => {
    try {
      if (!isProductInCart) {
        const productData = {
          productId: product._id,
          title: product.title,
          price: product.price,
          owner: product._ownerId,
          imageUrl: product.imageUrl,
        };

        await cartService.addToCart(productData);
        setIsProductInCart(true);
        navigate("/cart");
      }else {
        alert('This product is already in your cart')
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
  const { values, onChange, onSubmit } = useForm(addReviewHandler, {
    review: '',
  });

  return (
    <section className="product-detail section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="product-thumb">
              <img src={product.imageUrl} className="img-detail product-image" alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="product-info d-flex">
              <div>
                <h2 className="product-title mb-0">{product.title}</h2>
                <p className="product-p">{product.style}</p>
              </div>
              <small className="product-price text-muted ms-auto mt-auto mb-5">${product.price}</small>
            </div>

            <div className="product-description">
              <strong className="d-block mt-4 mb-2">Description</strong>
              <p className="lead mb-5">{product.description}</p>
            </div>


            {userId === product._ownerId && (
              <div className="btn-edit">
                <Link className="editBtn" to={`/products/${product._id}/edit`}>Edit</Link>
                <button className="deleteBtn" onClick={deleteButtonClickHandler}>Delete</button>
              </div>
            )}

            
              <div className="product-cart-thumb row">
                <div className="col-lg-6 col-12 mt-4 mt-lg-0">
                {userId && userId !== product._ownerId && (
                  <button
                    type="button"
                    className="btn custom-btn cart-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#cart-modal"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                  )}
                </div>
              </div>
             
            
          </div>
          {userId && userId !== product._ownerId && (
          <div className="details-reviews">
              <h2>Reviews:</h2>
              {reviews.length === 0 ? (
                <p className="no-review">No reviews.</p>
              ):  <ul>
              {reviews.map(({ _id, text, owner: { name, _id: ownerId }, rating }) => (
                <li key={_id} className="review">
                  <p>{name}: {text} </p>
                  <StarRating rating={rating} />
                  {userId === ownerId && (<button className="del-btn" onClick={() => deleteReviewHandler(_id)}>
                    Delete Review
                  </button>)}
                </li>
              ))}
            </ul>}
            </div>
          )}
          {userId && userId !== product._ownerId && (<article className="create-review">
            <label>Add new review:</label>

            <form className="form" onSubmit={onSubmit}>
              <textarea name="review" value={values.review} onChange={onChange} placeholder="Write review"></textarea>

              {/* Star Rating UI */}
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${star <= selectedRating ? 'selected' : ''}`}
                    onClick={() => setSelectedRating(star)}
                  >
                    &#9733;
                  </span>
                ))}
              </div>

              <input className="btn custom-btn cart-btn" type="submit" value="Add Review" />
            </form>
          </article>)}

        </div>

      </div>


    </section>)

}

export default ProductDetails