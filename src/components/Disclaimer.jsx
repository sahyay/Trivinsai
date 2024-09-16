import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';


export default function Disclaimer() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // Scroll to top on route change

  return (
    <>
      <Navbar />
      <div className='disclaimer-page' style={{ marginTop: '80px' }} id='disclaimer'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 mb-4">
              <div className="card p-4 shadow-sm rounded">
                <h1 className='text-title'>Disclaimer</h1>
                <p className='text-content'>
                  <strong>Effective Date:</strong> 16/09/2024
                </p>
                <p className='text-content'>
                  The information provided by <strong>Trivinsai TechPackTron Solutions</strong> (“we,” “us,” or “our”) on this website is for general informational purposes only. All information on the site is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
                </p>

                <h5 className='text-subtitle'>1. External Links Disclaimer</h5>
                <p className='text-content'>
                  The website may contain (or you may be sent through the website) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
                </p>

                <h5 className='text-subtitle'>2. Professional Disclaimer</h5>
                <p className='text-content'>
                  The site cannot and does not contain legal or professional advice. Any legal or professional information is provided for general informational and educational purposes only, and it is not a substitute for professional advice. You should consult with a professional to obtain advice regarding your specific situation.
                </p>

                <h5 className='text-subtitle'>3. Limitation of Liability</h5>
                <p className='text-content'>
                  Under no circumstances shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and reliance on any information on the site is solely at your own risk.
                </p>

                <h5 className='text-subtitle'>4. Changes to This Disclaimer</h5>
                <p className='text-content'>
                  We may update this disclaimer from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this disclaimer periodically.
                </p>

                <h5 className='text-subtitle'>5. Contact Us</h5>
                <p className='text-content'>
                  If you have any questions about this disclaimer, please contact us at <a href="mailto:admin@trivinsai.com" className='text-primary'>admin@trivinsai.com</a>.
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
