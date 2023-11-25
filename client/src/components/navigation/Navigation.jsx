import './navigation.css'
import { Link } from 'react-router-dom';

const Navigation = ()=>{
    return (
      <nav className="navbar navbar-expand-lg">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand" >
        
          <strong><span>Little</span> <Link to="/home">Fashion</Link> </strong>
          
          
        </a>
        <div className="d-lg-none">
          <a href="sign-in.html" className="bi-person custom-icon me-3" />
          <a href="product-detail.html" className="bi-bag custom-icon" />
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
            <a className="nav-link"><Link to="/home">Home</Link></a>
              
            </li>
            <li className="nav-item">
            <a className="nav-link"><Link to="/story">Story</Link></a>
              
            </li>
            <li className="nav-item">
            <a className="nav-link"><Link to="/products">Products</Link></a>
               
            </li>
           
            <li className="nav-item">
              <a className="nav-link"><Link to="/contact">Contact</Link></a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link"><Link to="/products/create">Create Product</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link"><Link to="/wishlist">wish</Link></a>
            </li>
  
            <div className="d-none d-lg-block">
          <a className="nav-link"><Link to="/signIn">Sign In</Link></a>
          <a className="nav-link"><Link to="/signUp">Sign Up</Link></a>
          
          </div>
          </ul>
         
        </div>
      </div>
    </nav>)
}

export default Navigation