

import './navigation.css'
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-brand" >
          <strong><span>Little</span> <Link to="/home">Fashion</Link> </strong>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
              <Link className="nav-link" to="/story">Story</Link>
              <Link className="nav-link"  to="/products">Products</Link>
              <Link className="nav-link"  to="/contact">Contact</Link>
              <Link className="nav-link"  to="/products/create">Create Product</Link>
              <Link className="nav-link"  to="/signIn">Sign In</Link>
              <Link className="nav-link"  to="/signUp">Sign Up</Link>
              </li>
          </ul>
        </div>
       
      </div>
    
    </nav>)
}

export default Navigation