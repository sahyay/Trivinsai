import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';


export default function Faqs() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // Scroll to top on route change

  return (
    <>
      <Navbar />
      <div id="faqs" className="textboox2" style={{ marginTop: '80px' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 mb-4">
              <div className="card p-4 shadow-md rounded">
                <p className="texttitle fs-3 mb-3 text-center">FAQs</p>
                <div className="mb-3">
                  <p className="fs-6 textpara mb-2">Q: What services does Trivinsai TechPackTron Solutions provide?</p>
                  <p className="fs-6 textpara mb-4">A: We offer solutions for IT needs, unique and special packaging requirements, electronic supplies, and office necessities.</p>
                </div>
                <div className="mb-3">
                  <p className="fs-6 textpara mb-2">Q: Are you currently manufacturing your products?</p>
                  <p className="fs-6 textpara mb-4">A: Currently, we are suppliers of high-quality goods. However, we plan to start manufacturing packaging and stationery items soon.</p>
                </div>
                <div className="mb-3">
                  <p className="fs-6 textpara mb-2">Q: What distinguishes Trivinsai TechPackTron Solutions from other providers?</p>
                  <p className="fs-6 textpara mb-4">A: Our holistic approach to business solutions, commitment to quality, customer-focused service, and strategic growth plans make us stand out.</p>
                </div>
                <div className="mb-3">
                  <p className="fs-6 textpara mb-2">Q: How can I place an order with your company?</p>
                  <p className="fs-6 textpara mb-4">A: You can contact our sales team via phone or email. We will work with you to understand your requirements and facilitate your order efficiently.</p>
                </div>
                <div className="mb-3">
                  <p className="fs-6 textpara mb-2">Q: Do you offer customized solutions?</p>
                  <p className="fs-6 textpara mb-4">A: Yes, we provide tailored solutions to meet the specific needs of our clients, ensuring optimal results and satisfaction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
