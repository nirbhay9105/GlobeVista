import React from 'react';
import './RecommendedSection.css';
import Container from 'react-bootstrap/Container';

function RecommendedSection(props) {
  return (
    <div className='recommended-section'>
      <Container className='position-relative py-5 rounded'>
        <div className='bg-shape position-absolute'></div>
        <div className='row justify-content-end'>
          <div className='col-md-6 col-lg-3'>
            <div className='text-box text-center text-md-start'>
              <h3 className='text-light text-uppercase'>{props.itemRecommendedTitle}</h3>
              <p className='text-light'>
                Enjoy curated recommendations for your next perfect trip.
                Plan smart and save more with exclusive deals.
              </p>
              <a className='book-now-btn' href="/">Book Now</a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default RecommendedSection;
