import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';


export default function ITProductConsultation() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // Scroll to top on route change
  return (
    <>
      <Navbar />
      <div className='it-product-consultation-page' style={{ marginTop: '80px' }} id='it-product-consultation'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 mb-4">
              <div className="card p-4 shadow-sm rounded">
                <h1 className='text-title'>IT Product Consultation</h1>
                <p className='text-content'>
                  At <strong>Trivinsai TechPackTron Solutions</strong>, we provide expert IT product consultation, guiding businesses in selecting the best tools and technologies to meet their specific needs. Our team ensures that your IT solutions are not only efficient but also scalable and future-proof.
                </p>
                <p className='text-content'>
                  Our consultants work closely with you to assess your current infrastructure and suggest the best technologies to optimize your operations and achieve your business goals.
                </p>

                <h5 className='text-subtitle'>Our Approach</h5>
                <ul className='text-content'>
                  <li><strong>Initial Assessment:</strong> Understanding your current IT setup and business needs.</li>
                  <li><strong>Strategic Planning:</strong> Creating a roadmap with recommendations and timelines.</li>
                  <li><strong>Product Selection:</strong> Suggesting the right hardware and software solutions.</li>
                  <li><strong>Implementation & Support:</strong> Ensuring seamless integration and ongoing support.</li>
                </ul>

                <h5 className='text-subtitle'>Our Key Services</h5>
                <ul className='text-content'>
                  <li><strong>IT Infrastructure Optimization:</strong> Enhancing your current systems for maximum performance and growth.</li>
                  <li><strong>Cloud Solutions:</strong> Helping you move to the cloud for flexibility and reduced operational costs.</li>
                  <li><strong>Enterprise Software Selection:</strong> Choosing the right software for improving processes and productivity.</li>
                  <li><strong>Hardware Consultation:</strong> Advising on essential hardware to keep your business running smoothly.</li>
                  <li><strong>Security & Compliance:</strong> Ensuring your systems meet industry standards for security and compliance.</li>
                </ul>

                <h5 className='text-subtitle'>Why Choose Us?</h5>
                <ul className='text-content'>
                  <li><strong>Expert Consultants:</strong> Our team stays updated on the latest IT trends to provide you with the most effective solutions.</li>
                  <li><strong>Vendor-Neutral Advice:</strong> We prioritize your needs without being tied to any specific vendors.</li>
                  <li><strong>Cost-Effective Solutions:</strong> Focused on improving efficiency while keeping costs low.</li>
                  <li><strong>End-to-End Support:</strong> From consultation to implementation, we provide full support every step of the way.</li>
                </ul>

                <h5 className='text-subtitle'>Get Started Today</h5>
                <p className='text-content'>
                  Ready to enhance your IT infrastructure and product lineup? Contact us at <a href="mailto:admin@trivinsai.com" style={{ color: '#2563eb' }} className='text-primary'>admin@trivinsai.com</a> or call us at <a href="tel:+91 9768979213" style={{ color: '#2563eb' }} className='text-primary'>+91 97689 79213</a> to schedule a consultation.
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
