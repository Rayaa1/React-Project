import './navigation.css'
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';
import { useContext } from 'react';


const Navigation = () => {
  const {
    isAuthenticated,
    name,
  } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg">

      <div className="container">
        <div className="navbar-brand" >
          <strong><span>Little</span> <Link to="/home">Fashion</Link> </strong>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            
              <Link className="nav-link" to="/home">Home</Link>
              <Link className="nav-link" to="/story">Story</Link>
              <Link className="nav-link" to="/products">Products</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
              {isAuthenticated && (
                <div id="user">
                  <Link className="nav-link" to="/products/create">Create Product</Link>
                  <Link className="bi-bag custom-icon" to="/cart"></Link>
                  <Link className="nav-link" to="/logout">Logout</Link>
                  <span>| {name}</span>
                  
                </div>
              )}
              {!isAuthenticated && (
                <div id="guest" >
                  <Link className="nav-link" to="/signIn">Sign In</Link>
                  <Link className="nav-link" to="/signUp">Sign Up</Link>
                </div>
              )}
            
          </ul>
        </div>

      </div>

    </nav>)
}

export default Navigation