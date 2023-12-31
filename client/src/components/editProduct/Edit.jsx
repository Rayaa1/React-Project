import "./Edit.css"
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as productService from '../../services/productsService';

const Edit = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const { productId } = useParams();
    const [product, setProduct] = useState({
        title: '',
        style: '',
        price: '',
        imageUrl: '',
        description: '',
    });
    const isValidImageUrl = (url) => {
        const pattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
        return pattern.test(url);
    };

    useEffect(() => {
        productService.getOne(productId)
            .then(result => {
                setProduct(result);
            });
    }, [productId]);

    const editSubmitHandler = async (e) => {
        e.preventDefault();
        const updatedProduct = {
            title: e.target.title.value,
            style: e.target.style.value,
            price: e.target.price.value,
            imageUrl: e.target.imageUrl.value,
            description: e.target.description.value,
        }
        if (!updatedProduct.title || !updatedProduct.style || !updatedProduct.price || !updatedProduct.imageUrl || !updatedProduct.description) {
            setError("All fields are required.");
            return;
        } else if (updatedProduct.description.length < 6) {
            setError('Description must be more than 6 characters')
            return
        }
        if (!isValidImageUrl(updatedProduct.imageUrl)) {
            setError("Please enter a valid image URL starting with 'http://' or 'https://'.");
            return;
        }
        if (isNaN(+updatedProduct.price)) {
            setError("Please enter a valid numeric price.")
            return
        }

        try {

            await productService.edit(productId, updatedProduct);

            navigate('/products');
        } catch (err) {
            setError(err.message || 'An error occurred while editing the product.');
        }
    }

    const onChange = (e) => {
        setProduct(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };
    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={editSubmitHandler}>

                <div className="container-create">
                    <img className="create-img" src="https://static1.squarespace.com/static/5c38f057c3c16aa76d36db31/t/5c8d8e90ec212d734782e36e/1692295973787/" alt="" />

                    <h1>Edit Product</h1>

                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" name="title" value={product.title} onChange={onChange} placeholder="Enter game title..." />
                    </div>

                    <div className="form-group">
                        <label htmlFor="style">Style:</label>
                        <input type="text" id="style" name="style" value={product.style} onChange={onChange} placeholder="Enter product style..." />
                    </div>

                    <div className="form-group">
                        <label htmlFor="price">Price:</label>
                        <input type="text" id="price" name="price" value={product.price} onChange={onChange} placeholder="Enter product price..." />
                    </div>

                    <div className="form-group">
                        <label htmlFor="imageUrl">Image:</label>
                        <input type="text" id="imageUrl" name="imageUrl" value={product.imageUrl} onChange={onChange} placeholder="Upload a photo..." />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea name="description" id="description" value={product.description} onChange={onChange}></textarea>
                    </div>
                    {error && <p className="text-danger">{error}</p>}
                    <div className="form-group">
                        <input className="btn-custom" type="submit" value="Edit Product" />
                    </div>
                </div>
            </form>
        </section>


    );
}
export default Edit