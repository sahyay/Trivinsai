import React, { useEffect } from 'react';
import trivinsai from '../images/trivinsaiflower.jpg';
import Typed from 'typed.js';

const Textbook1 = () => {
  useEffect(() => {
    const options = {
      strings: ["Empowering Business, Delivering Excellence"],
      typeSpeed: 90,
      backSpeed: 50,
      showCursor: false,
      loop: true,
      smartBackspace: true
    };

    const typed = new Typed("#typed-op", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="content">
      <section className="main-section">
        <div className="content-right col-md-6">
          <div className="image-container">
            <img src={trivinsai} alt="TrivinSai" className="section-image img-fluid" />
          </div>
        </div>
        <div className="content-left col-md-6 ">
          <p className="section-label ">Trivinsai TechPackTron Solutions</p>
          <div className='section-title'>
            <p className='section-text' id="typed-op"></p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Textbook1;
