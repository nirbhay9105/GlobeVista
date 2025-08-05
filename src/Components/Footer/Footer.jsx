import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left: Brand / Name */}
        <div className="footer-brand">
          <h3>Nirbhay Singh</h3>
          <p>Building modern websites with style & performance.</p>
        </div>

        {/* Middle: Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/react-travel#/">Home</a></li>
            <li><a href="/react-travel#/destinations">Destinations</a></li>
            <li><a href="/react-travel#/holidays">Holidays</a></li>
            <li><a href="/react-travel#/city-breaks">City Breaks</a></li>
          </ul>
        </div>

        {/* Right: Social Media */}
        <div className="footer-social">
          <h4>Follow Me</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} <br/> All Rights Reserved. <span className="footer-name"><br/>❤️Nirbhay Singh.</span></p>
      </div>
    </footer>
  );
}

export default Footer;
