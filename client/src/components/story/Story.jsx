import "./story.css"
import { Link } from 'react-router-dom';

import { useState } from "react";
const Story = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalDetails, setModalDetails] = useState({});

  const openModal = (member) => {
    setModalDetails(member.details);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const teamMembers = [
    { name: 'Teodora', role: 'Founder', image: 'images/people/founderWoman.avif',details:{name:"Teodora",role:"Founder",bio:"Meet Teodora Petrova ,born in 1996,a founder of Little Fashion. Since 2020, Teodora's innovative approach to design has captivated the fashion world.Little Fashion stands as a testament to Teodora's commitment to blending contemporary trends with timeless elegance. At just 27, Teodora is already leaving an indelible mark on the industry, proving that age is no barrier to crafting a unique and influential fashion legacy."} },
    { name: 'George', role: 'Marketing', image: 'images/people/marketingMan.jpg',details:{name:"George",role:"Marketing manager",bio:"Meet George Ivanov, born in 1994, a marketing maestro with a knack for crafting compelling brand narratives. Rising through the ranks from an early start in 2020, George, now at 29, leads as the Marketing Manager at Little Fashion. Known for blending digital savvy with classic strategies, George continues to redefine marketing norms, making an indelible mark in the industry."} },
    { name: 'Maria', role: 'Designer', image: 'images/people/managerWoman.jpg',details:{name:"Maria",role:"Designer",bio:"Meet Maria Hristova,born in 1996, a designer of Little Fashion. Since 2020, Maria's design brilliance has been the heartbeat of the boutique's style. With a keen eye for blending timeless elegance and contemporary flair, Maria transforms each garment into a work of art. As the lead designer, Maria curates a fashion haven that reflects not just style but individuality." }},
  ];

  return (
    <main>
      <header className="site-header section-padding-img site-header-image">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 header-info">
              <h1>
                <span className="d-block text-primary">Company</span>
                <span className="d-block text-dark">Fashion</span>
              </h1>
            </div>
          </div>
        </div>
        <img src="images/header/businesspeople-meeting-office-working.jpg" className="header-image img-fluid" alt="" />
      </header>


      <div>
        <section className="team section-padding">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="mb-5">Meet our <span>team</span></h2>
              </div>
              {teamMembers.map((member, index) => (
              <div key={index} className="col-lg-4 mb-4 col-12">
                <div className="team-thumb d-flex align-items-center">
                  <img src={member.image} className="img-fluid custom-circle-image team-image me-4" alt="" />
                  <div className="team-info">
                    <h5 className="mb-0">{member.name}</h5>
                    <strong className="text-muted">{member.role}</strong>
                    <button type="button" className="btn custom-modal-btn" onClick={() => openModal(member)}>
                      <i className="bi-plus-circle-fill" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
          {showModal && (
        <div className="my-modal-overlay">
          <div className="my-modal-dialog my-modal-dialog-centered my-modal-dialog-lg">
            <div className="my-modal-content border-0">
              <div className="my-modal-header flex-column">
                <h3 className="my-modal-title">{modalDetails.name}</h3>
                <h6 className="my-text-muted">{modalDetails.role}</h6>
                <button type="button" className="my-btn-close" onClick={closeModal} aria-label="Close">
                  &times;
                </button>
              </div>
              <div className="my-modal-body">
                <h5 className="mb-4">{modalDetails.bio}</h5>


              </div>
            </div>
          </div>
        </div>
      )}
        </section>
        

        
          <div className="container">
            <div className="row">
              <div className="col-lg-9 mx-auto col-11">
                <h2 className="text-center">About Us, <br /> <span>Little</span> Fashion</h2>
                <div className="about-us-caption">
                  <h3>Our Story</h3>
                  <p className="lead">Little Fashion began as a dream shared by Teodora, who envisioned a place where individuals could discover the perfect clothes for every occasion. What started as a small boutique has grown into a beloved fashion destination, cherished by those who appreciate the artistry of clothing. Today, we continue to be driven by a commitment to providing an unparalleled shopping experience and a curated selection that reflects the latest trends.</p>
                </div>
                <div className="about-us-caption">
                  <h3>Our Mission</h3>
                  <p className="lead">We believe that what you wear has the power to boost your confidence and express your unique personality. Our mission is to empower individuals through fashion, offering a diverse range of clothes that cater to different tastes, body types, and occasions. We strive to create a space where everyone feels confident, beautiful, and comfortable in their own skin.</p>
                </div>
              </div>
            </div>
          </div>
       
      </div>
      
    </main>
  )
};

export default Story