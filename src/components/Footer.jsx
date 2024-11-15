// components/Footer.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import trivinsai from '../images/trivinsaiflower.jpg';
import instagramIcon from '../images/instagram.svg';
import linkedinIcon from '../images/linkedin.svg';
import facebookIcon from '../images/facebook.svg';
import twitterIcon from '../images/twitter.svg';

export default function Footer() {

  const navigate = useNavigate();

  const handleNavigation = (path, hash) => {
    navigate(path);
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Small timeout to ensure navigation has happened
  };

  return (
    <div className="footer-container mt-5 border-top">
      <footer className="footer">
        <div className="footer-top">
          <div className="comp-logo">
            <a href="/" className="logolink1 logo-link">
              <img src={trivinsai} alt="Trivinsai logo" className="trivinsaifooterlogo logo-svg" />
              Trivinsai
            </a>
          </div>
          <p className="filler-text">"Empowering Business, Delivering Excellence"</p>
          <div className="social">
            <a className="social-link" href="https://www.instagram.com/trivinsai_" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" className="social-icon" />
            </a>
            <a className="social-link" href="https://www.linkedin.com/company/trivinsai-techpacktron-solutions-pvt-ltd/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
            </a>
            <a className="social-link" href="https://www.facebook.com/profile.php?id=61565733548186&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" className="social-icon" />
            </a>
            <a className="social-link" href="https://x.com/trivinsai" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" className="social-icon" />
            </a>
          </div>
        </div>
        <div className="footer-grid">
          <div className="footer-grid-column">
            <div className="footer-grid-heading">Company</div>
            <ul className="footer-links-list">
              <li><Link to="/aboutus" className="footer-link">About</Link></li>
              <li><Link to="/career" className="footer-link">Jobs</Link></li>
              <li><Link to="/news" className="footer-link">News</Link></li>
              <li><Link to="/blog" className="footer-link">Blog</Link></li>
            </ul>
          </div>
          <div className="footer-grid-column">
            <div className="footer-grid-heading">Services</div>
            <ul className="footer-links-list">
              <li><a href="#services" onClick={() => handleNavigation('/', 'services')} className="footer-link">IT infrastructures to unique packaging</a></li>
              <li><Link to="/webdevelopment" className="footer-link">Web Development</Link></li>
              <li><Link to="/appdevelopment" className="footer-link">App Development</Link></li>
              <li><Link to="/itconsultation" className="footer-link">IT Product Consultation</Link></li>
            </ul>
          </div>
          <div className="footer-grid-column">
            <div className="footer-grid-heading">Legal</div>
            <ul className="footer-links-list">
              <li><Link to="/privacypolicy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/disclaimer" className="footer-link">Disclaimer</Link></li>
              <li><Link to="/faq" className="footer-link">FAQ</Link></li>
              <li><Link to="/terms" className="footer-link">Terms Of Service</Link></li>
            </ul>
          </div>
          <div className="footer-grid-column">
            <div className="footer-grid-heading">Contacts</div>
            <ul className="footer-links-list">
              <li><a href="tel:+91-9768979213" className="footer-link" style={{ color: '#2563eb' }}>+91 97689 79213</a></li>
              <li><a href="tel:+91-8104880343" className="footer-link" style={{ color: '#2563eb' }}>+91 81048 80343</a></li>
              <li><a href="mailto:marketing@trivinsai.com" className="footer-link" style={{ color: '#2563eb' }}>marketing@trivinsai.com</a></li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="footer-copyright">
        © 2024 - Present Trivinsai TechPackTron Solutions Private Limited. All rights reserved.
        <p>Developed by Sahil Phadke 
          <a className="social-link" href="https://www.linkedin.com/in/sahil-phadke-7775352a9/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
        </p>   
      </div>
    </div>
  );
}
