import { Link } from "react-router-dom";
import "./productItem.css"


const ProductItem = ({
    _id,
    title,
    style,
    imageUrl,
    price,
    

}) => {
    
    
        return (
            <div class="col-lg-3 col-12 mb-3">
                <div className="product-thumb">
                    <a >
                        <Link to={`/products/${_id}`}>
                            <img src={imageUrl} className="img-fluid product-image" alt="" />
                        </Link>

                    </a>
                    <Link to="/wishlist"><div class="product-top d-flex">
                        <a  class="bi-heart-fill product-icon"></a>
                    </div></Link>

                    <div className="product-info d-flex">
                        <div>
                            <h5 className="product-title mb-0">
                                <strong className="product-t">{title}</strong>

                            </h5>
                            <i className="product-p">{style}</i>
                        </div>
                        <i className="product-price text-muted ms-auto">Bought for ${price}</i>
                    </div>


                </div>
            </div>
        )

    }

    export default ProductItem