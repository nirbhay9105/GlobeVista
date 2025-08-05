import React from 'react';
import './NeedInspirationSection.css';
import Container from 'react-bootstrap/Container';

function NeedInspirationSection() {
  return (
    <div className='need-inspiration-section py-5 position-relative'>
      <Container>
        <div className="row justify-content-start">
          <div className='col-md-5 bg-shape'>
            <h2 className='text-uppercase'>Need Inspiration?</h2>
            <p>
              Stuck on where to travel next? Let us inspire you with the best destinations and travel ideas tailored for you.
            </p>
            <div className='contact-box mt-2'>
              <h5 className='text-uppercase text-nowrap me-2'>Call us:</h5>
              <a href="tel:0900800700" className='h5'>09105468448</a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default NeedInspirationSection;
