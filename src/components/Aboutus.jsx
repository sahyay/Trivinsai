import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';


export default function Aboutus() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // Scroll to top on route change

  return (
    <>
      <Navbar />
      <div className='textboox2' id='textbook2' style={{ marginTop: '80px' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 mb-4">
              <div className="card p-4 shadow-md rounded">
                <p className='texttitle fs-3 mb-3'>About Us</p>
                <p className='fs-3 mb-3'>Company Overview</p>
                <p className='fs-6 textpara mb-4'>
                  Trivinsai TechPackTron Solutions Private Limited, established in 2024, is a multifaceted company specializing in providing comprehensive IT solutions, unique packaging services, high-quality electronic supplies, and essential office necessities. We are committed to delivering integrated, high-quality solutions that drive efficiency and innovation across various business operations.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-10 col-lg-8 mb-4">
              <div className="card p-4 shadow-md rounded">
                <p className='texttitle fs-3 mb-3'>Our Mission</p>
                <p className='fs-6 textpara mb-4'>
                  Our mission is to be the cornerstone of innovation and efficiency for businesses worldwide. We aim to provide top-notch products and services that cater to the evolving needs of our clients, ensuring their operations run smoothly and effectively. By leveraging advanced technology and exceptional customer service, we strive to create a seamless and productive experience for all our partners.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-10 col-lg-8 mb-4">
              <div className="card p-4 shadow-md rounded">
                <p className='texttitle fs-3 mb-3'>Our Vision</p>
                <p className='fs-6 textpara mb-3'>
                  We envision being the leading provider of comprehensive and innovative business solutions. Our goal is to be recognized for our excellence, customer satisfaction, and continuous growth. We aim to expand our reach and capabilities, continuously improving to meet the dynamic demands of the market and our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
