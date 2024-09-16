import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import trivinsai from '../images/trivinsaiflower.jpg'; // Import the image

export default function Navbar() {

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
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-white mb-1">
        <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{ paddingLeft: '18px', paddingTop: '0', marginTop: '-5px' }}>
  <img src={trivinsai} alt="Trivinsai logo" style={{ height: '50px', marginRight: '5px' }} />
  <b className="navbar-brand-text">Trivinsai</b>
</a>


          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link mx-3" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-3" to="/aboutus">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" onClick={() => handleNavigation('/', 'services')} href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" onClick={() => handleNavigation('/', 'booking')} href="#booking">
                  Booking
                </a>
              </li>
              <li className="nav-item">
              <Link className="nav-link mx-3" to="/career">
                  Careers
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item dropdown mx-5">
                <a
                  style={{ color: '#ff6900' }}
                  className="nav-link"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contact Us
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item"  style={{ color: '#2563eb' }} href="mailto: admin@trivinsai.com">
                      admin@trivinsai.com
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item"  style={{ color: '#2563eb' }} href="tel:+91 9768979213">
                      +91 9768979213
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Trivinsai TechPackTron Solutions Pvt Ltd.
                    </a> 
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
