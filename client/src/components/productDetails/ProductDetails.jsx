import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as productService from '../../services/productsService';
import "./productDetails.css"

import { Link } from 'react-router-dom';



const ProductDetails = ()=> {
  const navigate = useNavigate();
    const [product, setProduct] = useState({});
    
    const { productId } = useParams();
    useEffect(() => {
        productService.getOne(productId)
            .then(setProduct);

    }, [productId]);

    const deleteButtonClickHandler = async () => {
      const hasConfirmed = confirm(`Are you sure you want to delete ${product.title}`);

      if (hasConfirmed) {
          await productService.remove(productId);

          navigate('/products');
      }
  }

    return(
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
                <div className="btn-edit">
                <Link className="editBtn" to={`/products/${product._id}/edit`}>Edit</Link>
                
                  </div>
                  <div className="btn-edit">
                  <button className="deleteBtn" onClick={deleteButtonClickHandler}>Delete</button>
                  </div>
                <div className="product-cart-thumb row">
                  <div className="col-lg-6 col-12">
                    <select className="form-select cart-form-select" id="inputGroupSelect01">
                      <option selected>Quantity</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </div>
                  <div className="col-lg-6 col-12 mt-4 mt-lg-0">
                    <button type="submit" className="btn custom-btn cart-btn" data-bs-toggle="modal" data-bs-target="#cart-modal">Add to Cart</button>
                  </div>
                </div>
                
              </div>
              
            </div>
            
          </div>
          
        </section>)

}

export default ProductDetails