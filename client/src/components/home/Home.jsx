import { Link } from 'react-router-dom';

const Header = ()=>{
    return( <main>
        <section className="slick-slideshow">   
          <div className="slick-custom">
            <img src="images/slideshow/fashion-header.jpeg" className="img-fluid" alt="" />
            <div className="slick-bottom">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-10">
                    <h1 className="slick-title">Cool Fashion</h1>
                    <p className="lead text-white mt-lg-3 mb-lg-5">Little fashion shop includes all your needs!</p>
                    <a className="btn custom-btn"><Link to="/story">Learn more about us</Link></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </section>
        <section className="about section-padding">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="mb-5">Get started with <span>Little</span> Fashion</h2>
              </div>
              <div className="col-lg-2 col-12 mt-auto mb-auto">
                <ul className="nav nav-pills mb-5 mx-auto justify-content-center align-items-center" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Introduction</button>
                  </li>
                </ul>
              </div>
              <div className="col-lg-10 col-12">
                <div className="tab-content mt-2" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div className="row">
                      <div className="col-lg-7 col-12">
                        <img src="images/who-we-are.jpg" className="img-fluid" alt="" />
                      </div>
                      <div className="col-lg-5 col-12">
                        <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                          <h4 className="mb-3">Good <span>Design</span> <br />Ideas for <span>your</span> fashion</h4>
                          <p>At Little Fashion, we believe that fashion is a form of self-expression, and our carefully selected pieces are designed to help you make a statement without saying a word. Whether you're a trendsetter, a classic beauty, or someone who loves to mix and match, we have something for every style and personality.</p>
                          <div className="mt-2 mt-lg-auto">
                          <a className="custom-link mb-2"><Link to="/story">Learn more about us</Link></a>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="front-product">
          <div className="container-fluid p-0">
            <div className="row align-items-center">
              <div className="col-lg-6 col-12">
                <img src="images/fashion-products.jpeg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 col-12">
                <div className="px-5 py-5 py-lg-0">
                  <h2 className="mb-4"><span>Fashion</span> Product</h2>
                  <p className="lead mb-4">Each product tells a story of style, quality, and individuality. Our carefully curated selection showcases a diverse range of fashion items that cater to your unique tastes and preferences.</p>
                  <a className="bi-arrow-right ms-2"><Link to="/products">Explore Products</Link></a>
                </div>
              </div>
            </div>
          </div>
        </section>
       
      </main>)
}

export default Header