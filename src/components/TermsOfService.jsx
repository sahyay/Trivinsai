import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

export default function TermsOfService() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // Scroll to top on route change

  return (
    <>
      <Navbar />
      <div className='terms-of-service-page' style={{ marginTop: '80px' }} id='terms-of-service'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 mb-4">
              <div className="card p-4 shadow-sm rounded">
                <h1 className='text-title'>Terms of Service</h1>
                <p className='text-content'>
                  <strong>Effective Date:</strong> 16/09/2024
                </p>
                <p className='text-content'>
                  Welcome to <strong>Trivinsai TechPackTron Solutions</strong>. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions.
                </p>

                <h5 className='text-subtitle'>1. Use of Our Website</h5>
                <p className='text-content'>
                  You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of our website by any third party.
                </p>

                <h5 className='text-subtitle'>2. Intellectual Property</h5>
                <p className='text-content'>
                  All content, including but not limited to text, graphics, logos, and images, on our website is the property of <strong>Trivinsai TechPackTron Solutions</strong> or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or otherwise use any content from our website without our express written permission.
                </p>

                <h5 className='text-subtitle'>3. Limitation of Liability</h5>
                <p className='text-content'>
                  Our website is provided on an "as is" and "as available" basis. We do not warrant that the website will be uninterrupted or error-free. We are not liable for any damages arising from the use of or inability to use our website.
                </p>

                <h5 className='text-subtitle'>4. Changes to These Terms</h5>
                <p className='text-content'>
                  We may update these terms from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of our website constitutes acceptance of the updated terms.
                </p>

                <h5 className='text-subtitle'>5. Governing Law</h5>
                <p className='text-content'>
                  These terms are governed by and construed in accordance with the laws of India, and any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts in India.
                </p>

                <h5 className='text-subtitle'>6. Contact Us</h5>
                <p className='text-content'>
                  If you have any questions about these Terms of Service, please contact us at <a href="mailto:admin@trivinsai.com" className='text-primary'>admin@trivinsai.com</a>.
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
