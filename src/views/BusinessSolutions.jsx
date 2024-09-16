import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function BusinessSolutions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className='business-solutions-page' style={{ marginTop: '80px' }} id='business-solutions'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 mb-4">
              <div className="card p-4 shadow-sm rounded">
                <h1 className='text-title'>Business Solutions</h1>
                <p className='text-content'>
                  At <strong>Trivinsai TechPackTron Solutions</strong>, we offer a variety of business solutions aimed at enhancing efficiency, security, and growth. Our services cater to businesses at all stages, providing the right tools and strategies for success.
                </p>
                <p className='text-content'>
                  From robust IT infrastructures to unique packaging solutions, explore our offerings to find how we can help optimize your business operations.
                </p>

                <h5 className='text-subtitle'>Our Services Include:</h5>
                <ul className='text-content'>
                  <li><strong>IT Infrastructure Setup:</strong> Customized systems that ensure high performance and scalability for your business.</li>
                  <li><strong>Network Solutions:</strong> Secure and efficient network designs for reliable connectivity and protection against cyber threats.</li>
                  <li><strong>Cyber Security:</strong> Comprehensive measures to protect your business from cyber threats and ensure data integrity.</li>
                  <li><strong>Office Necessities:</strong> Complete solutions for equipping your workspace, including electronics, furniture, and stationery.</li>
                  <li><strong>Unique Packing Services:</strong> Custom packaging with eco-friendly materials and personalized branding to enhance product presentation.</li>
                </ul>

                <h5 className='text-subtitle'>Why Choose Us?</h5>
                <ul className='text-content'>
                  <li><strong>Tailored Solutions:</strong> Customized to fit your specific business needs.</li>
                  <li><strong>Expert Team:</strong> Experienced professionals delivering high-quality solutions.</li>
                  <li><strong>Comprehensive Support:</strong> End-to-end support from consultation to maintenance.</li>
                  <li><strong>Innovative Approach:</strong> Up-to-date with the latest industry trends and technologies.</li>
                </ul>

                <h5 className='text-subtitle'>Get Started with Our Solutions</h5>
                <p className='text-content'>

Ready to optimize your business? Contact us at <a href="mailto:consultation@trivinsai.com" style={{ color: '#2563eb' }} className='text-primary'>consultation@trivinsai.com</a> or call <a href="tel:+91 9324352817" style={{ color: '#2563eb' }} className='text-primary'>+91 9324352817</a> to schedule a consultation.
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
