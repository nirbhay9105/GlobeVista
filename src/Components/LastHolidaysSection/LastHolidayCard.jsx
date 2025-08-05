import React from 'react';
import './LastHolidaysSection.css';

function LastHolidayCard({ itemImage, itemTitle, itemDescription }) {
  return (
    <div className="col-md-4" data-aos="fade-up">
      <div className="card h-100 shadow-sm border-0">
        <img
          src={itemImage}
          alt={itemTitle}
          className="card-img-top img-hover"
        />
        <div className="card-body text-center">
          <h5 className="card-title">{itemTitle}</h5>
          <p className="card-text">{itemDescription}</p>
          <a href="#!" className="book-now-btn">Book Now</a>
        </div>
      </div>
    </div>
  );
}

export default LastHolidayCard;
