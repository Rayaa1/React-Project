import { useNavigate } from 'react-router-dom';
import "./productCreate.css"

import * as productService from '../../services/productsService';

export default function ProductCreate() {
    const navigate = useNavigate();
    
    const createProductSubmitHandler = async (e) => {
        e.preventDefault();

        const productData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await productService.create(productData);

            navigate('/products');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    return (
        <section id="create-page" className="auth">
      <form id="create" onSubmit={createProductSubmitHandler}>
        
        <div className="container-create">
            <img className="create-img" src="https://blog.ebunoluwole.com/wp-content/uploads/2022/06/Opening-A-Fashion-Boutique-What-You-Need-To-Know-1024x576.png"  alt="" />
            
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
            <input type="text" id="price" name="price" placeholder="Enter product price..."  />
          </div>

          <div className="form-group">
            <label htmlFor="imageUrl">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea name="description" id="description"></textarea>
          </div>

          <div className="form-group">
            <input className="btn-custom" type="submit" value="Create Product" />
          </div>
        </div>
      </form>
    </section>

       
    );
}