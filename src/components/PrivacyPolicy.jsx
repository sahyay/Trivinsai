import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

export default function PrivacyPolicy() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // Scroll to top on route change

  return (
    <>
      <Navbar />  
      <div className='privacy-policy-page' style={{ marginTop: '80px' }} id='privacy-policy'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 mb-4">
              <div className="card p-4 shadow-sm rounded">
                <h1 className='text-title'>Privacy Policy</h1>
                <p className='text-content'>
                  <strong>Effective Date:</strong> 16/09/2024
                </p>
                <p className='text-content'>
                  At <strong>Trivinsai TechPackTron Solutions</strong>, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
                </p>

                <h5 className='text-subtitle'>Information We Collect</h5>
                <p className='text-content'>
                  We do not collect personal data such as names, email addresses, or phone numbers from visitors to our website. However, if you choose to use our Form or other interactive features in the future, we may collect information you provide voluntarily.
                </p>

                <h5 className='text-subtitle'>Third-Party Links</h5>
                <p className='text-content'>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>

                <h5 className='text-subtitle'>Security</h5>
                <p className='text-content'>
                  We implement reasonable security measures to protect our website from unauthorized access, disclosure, alteration, and destruction. However, please note that no data transmission over the Internet can be guaranteed to be 100% secure.
                </p>

                <h5 className='text-subtitle'>Changes to This Privacy Policy</h5>
                <p className='text-content'>
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically.
                </p>

                <h5 className='text-subtitle'>Contact Us</h5>
                <p className='text-content'>
                  If you have any questions about this Privacy Policy, please contact us at <a href="mailto:admin@trivinsai.com" className='text-primary'>admin@trivinsai.com</a>.
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
