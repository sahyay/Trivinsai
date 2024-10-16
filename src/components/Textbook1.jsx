import React, { useEffect } from 'react';
import trivinsai from '../images/TRIVINSAIANIMATION.mp4';
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
            {/* Replace img with video */}
            <video
              src={trivinsai}
              className="section-image img-fluid"
              autoPlay
              muted
              loop
              playsInline
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
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
