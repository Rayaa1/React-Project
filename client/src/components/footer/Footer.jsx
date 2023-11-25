import "./footer.css"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-10 me-auto mb-4">
              <h4 className="text-white mb-3"><a href="index.html">Little</a> Fashion</h4>
              <p className="copyright-text text-muted mt-lg-5 mb-4 mb-lg-0">Copyright © 2022 <strong>Little Fashion</strong></p>
            </div>
            <div className="col-lg-5 col-8">
              <h5 className="text-white mb-3">Sitemap</h5>
              <ul className="footer-menu d-flex flex-wrap">
                <li className="footer-menu-item"><a className="footer-menu-link"><Link to="/home">Home</Link></a></li>
                <li className="footer-menu-item"><a  className="footer-menu-link"><Link to="/products">Products</Link></a></li>
                <li className="footer-menu-item"><a className="footer-menu-link"><Link to="/contact">Contact</Link></a></li>
                <li className="footer-menu-item"><a className="footer-menu-link"><Link to="/story">Story</Link></a></li>
               
              </ul>
            </div>
            <div className="col-lg-3 col-4">
              <h5 className="text-white mb-3">Social</h5>
              <ul className="social-icon">
                <li><a href="https://www.youtube.com/" className="social-icon-link bi-youtube" /></li>
                <li><a href="https://www.whatsapp.com/" className="social-icon-link bi-whatsapp" /></li>
                <li><a href="https://www.instagram.com/" className="social-icon-link bi-instagram" /></li>
                <li><a href="https://www.skype.com/" className="social-icon-link bi-skype" /></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer