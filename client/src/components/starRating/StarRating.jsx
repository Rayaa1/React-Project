import React from 'react';
import "./starRating.css"
const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < rating ? 'star selected' : 'star'}>
      &#9733; 
    </span>
  ));

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;