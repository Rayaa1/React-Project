import { useNavigate } from 'react-router-dom';
import "./productCreate.css"

import * as productService from '../../services/productsService';
import { useState } from 'react';

export default function ProductCreate() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const isValidImageUrl = (url) => {
    const pattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return pattern.test(url);
  };
  const createProductSubmitHandler = async (e) => {
    e.preventDefault();

    const productData = Object.fromEntries(new FormData(e.currentTarget));
    if (!productData.title || !productData.style || !productData.price || !productData.imageUrl || !productData.description) {
      setError("All fields are required.");
      return;
    } else if (productData.description.length < 6) {
      setError('Description must be more than 6 characters')
      return
    }
    if (!isValidImageUrl(productData.imageUrl)) {
      setError("Please enter a valid image URL starting with 'http://' or 'https://'.");
      return;
    }
    if (isNaN(+productData.price)) {
      setError("Please enter a valid numeric price.")
      return
    }
    try {
      await productService.create(productData);

      navigate('/products');
    } catch (err) {
      setError(err.message || 'An error occurred while creating the product.');
    }
  }

  return (
    <section id="create-page" className="auth">
      <form id="create" onSubmit={createProductSubmitHandler}>

        <div className="container-create">
          <img className="create-img" src="https://blog.ebunoluwole.com/wp-content/uploads/2022/06/Opening-A-Fashion-Boutique-What-You-Need-To-Know-1024x576.png" alt="" />

          <h1>Create Product</h1>

          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" placeholder="Enter product title..." />
          </div>

          <div className="form-group">
            <label htmlFor="style">Style:</label>
            <input type="text" id="style" name="style" placeholder="Enter product style..." />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input type="text" id="price" name="price" placeholder="Enter product price..." />
          </div>

          <div className="form-group">
            <label htmlFor="imageUrl">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea name="description" id="description"></textarea>
          </div>
          {error && <p className="text-danger">{error}</p>}
          <div className="form-group">
            <input className="btn-custom" type="submit" value="Create Product" />
          </div>
        </div>
      </form>
    </section>


  );
}