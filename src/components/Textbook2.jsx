import React from 'react';
import { Link } from 'react-router-dom';


export default function Textbook2() {
  return (
    <div className='textboox2' id='textbook2'>
      <div className="container p-3 my-5">

        {/* Software Services Section */}
        <div className="card shadow-lg border-0"> {/* Enhanced shadow and removed border */ }
          <div className="card-body d-flex flex-wrap justify-content-between align-items-center">
            {/* Left Section with Text (50%) */}
            <div className="left-section" style={{ flex: '1 1 60%' }}>
              <p className='texttitle  fs-1 mb-3'>Additional Services </p> {/* Title in uppercase and bold */}
              <p className='fs-6 textpara mb-3'>
                We specialize in delivering top-tier software solutions tailored to your business needs. From web development using the MERN stack to app development with cutting-edge technologies, we are experts at providing full-cycle services that ensure seamless and efficient results.
              </p>
            </div>

            {/* Right Section with Buttons (50%) */}
            <div className="right-section d-flex justify-content-center align-items-center" style={{ flex: '1 1 40%' }}>
              <Link to="/webdevelopment" className="btn-custom mx-3">Web Development</Link>
              <Link to="/appdevelopment" className="btn-custom mx-3">App Development</Link> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
