import React from 'react';
import './HolidayPlanSection.css';
import Container from 'react-bootstrap/Container';

function HolidayPlanSection(props) {
  return (
    <div className='holiday-plan-section py-5'>
      <Container className='h-100 d-flex flex-column align-items-start justify-content-end'>
        <h3 
          className='text-start text-light text-uppercase'
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {props.itemHolidayPlanTitle}
        </h3>
        
        <p 
          className='text-start text-light'
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Book your perfect summer getaway with <br /> exclusive deals and luxury stays across the globe.  <br /><br />
        </p>
        
        <div data-aos="fade-up" data-aos-delay="500">
          <button className='green-btn'>Check Summer Deals</button>
        </div>
      </Container>
    </div>
  );
}

export default HolidayPlanSection;
