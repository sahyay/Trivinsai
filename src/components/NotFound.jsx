// src/components/NotFound.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className='notfound-container'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 mb-4">
              <div className="card p-4 shadow-md rounded text-center">
                <h1 className='notfound-title'>404</h1>
                <p className='notfound-message'>Oops! The page you’re looking for doesn’t exist.</p>
                <Link to="/" className="btn btn-custom">Go to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
