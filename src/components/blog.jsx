import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';


export default function Blog() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // Scroll to top on route change

  return (
    <>
      <Navbar />
      <div className='blog-page' style={{ marginTop: '80px' ,backgroundColor: '#fff'}} id='blog'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 mb-4">
              <div className="card p-4 shadow-sm rounded mb-4">
                <p className='text-title'>Our Blog</p>
                <p className='text-content'>
                  Welcome to our blog where we share valuable insights, updates, and expert opinions on various topics related to IT solutions, office management, and more. Stay tuned to stay informed and ahead in your industry.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-10 col-lg-8">
              <div className="row">
                <div className="col-12 mb-4">
                  <div className="card p-4 shadow-sm rounded">
                    <h5 className='text-subtitle'>The Future of IT Consultation</h5>
                    <p className='text-content'>
                      IT consultation is evolving rapidly. Explore how emerging technologies and trends are shaping the future and how you can leverage them to enhance your business.
                      <a href="https://www.techradar.com/best/best-it-consulting-firms" className='text-primary' target="_blank" rel="noopener noreferrer">Check out top IT consulting firms.</a>
                    </p>
                  </div>
                </div>
                <div className="col-12 mb-4">
                  <div className="card p-4 shadow-sm rounded">
                    <h5 className='text-subtitle'>Maximizing Efficiency with Modern IT Infrastructure</h5>
                    <p className='text-content'>
                      Setting up a modern IT infrastructure is crucial for business efficiency. Discover best practices and strategies for optimizing your IT setup for better performance and scalability.
                      <a href="https://www.cio.com/article/353372/it-infrastructure-2024.html" className='text-primary' target="_blank" rel="noopener noreferrer">Learn about IT infrastructure best practices.</a>
                    </p>
                  </div>
                </div>
                <div className="col-12 mb-4">
                  <div className="card p-4 shadow-sm rounded">
                    <h5 className='text-subtitle'>Network Solutions for a Changing Business World</h5>
                    <p className='text-content'>
                      As businesses adapt to new challenges, effective network solutions are more important than ever. Learn about the latest trends and technologies in networking that can keep your operations running smoothly.
                      <a href="https://www.networkworld.com/article/3319060/networking/trends-in-networking.html" className='text-primary' target="_blank" rel="noopener noreferrer">Check out modern network solutions.</a>
                    </p>
                  </div>
                </div>
                <div className="col-12 mb-4">
                  <div className="card p-4 shadow-sm rounded">
                    <h5 className='text-subtitle'>Essential Cyber Security Practices for Businesses</h5>
                    <p className='text-content'>
                      Protecting your business from cyber threats is critical. Discover essential practices and strategies to enhance your cyber security posture and safeguard your data.
                      <a href="https://www.sans.org/white-papers/38423/" className='text-primary' target="_blank" rel="noopener noreferrer">Explore cyber security best practices.</a>
                    </p>
                  </div>
                </div>
                <div className="col-12 mb-4">
                  <div className="card p-4 shadow-sm rounded">
                    <h5 className='text-subtitle'>Creating a Productive Office Environment</h5>
                    <p className='text-content'>
                      A well-organized office boosts productivity. Learn tips and tricks for designing an office space that fosters efficiency and supports employee well-being.
                      <a href="https://www.forbes.com/sites/forbescoachescouncil/2022/01/31/10-tips-for-creating-a-productive-office-environment/" className='text-primary' target="_blank" rel="noopener noreferrer">Find out how to create a productive office environment.</a>
                    </p>
                  </div>
                </div>
                <div className="col-12 mb-4">
                  <div className="card p-4 shadow-sm rounded">
                    <h5 className='text-subtitle'>Choosing the Right Electronic Supplies</h5>
                    <p className='text-content'>
                      From computers to printers, selecting the right electronic supplies is key to an efficient office. Check out the latest recommendations for essential office tech.
                      <a href="https://www.techradar.com/news/the-best-business-laptops" className='text-primary' target="_blank" rel="noopener noreferrer">Discover top electronic supplies.</a>
                    </p>
                  </div>
                </div>
                <div className="col-12 mb-4">
                  <div className="card p-4 shadow-sm rounded">
                    <h5 className='text-subtitle'>Office Stationery Essentials for Productivity</h5>
                    <p className='text-content'>
                      Stationery might seem basic, but having the right supplies can make a big difference. Discover essential stationery items that can help keep your office organized and productive.
                      <a href="https://www.thebalancesmb.com/office-supplies-and-stationery-4587582" className='text-primary' target="_blank" rel="noopener noreferrer">See essential office stationery supplies.</a>
                    </p>
                  </div>
                </div>
                <div className="col-12 mb-4">
                  <div className="card p-4 shadow-sm rounded">
                    <h5 className='text-subtitle'>Trends in Custom Packaging Solutions</h5>
                    <p className='text-content'>
                      Custom packaging is evolving with new trends. Learn about the latest in custom packaging solutions, including sustainable practices and innovative designs.
                      <a href="https://www.packagingstrategies.com/home/article/22328669/the-future-of-custom-packaging" className='text-primary' target="_blank" rel="noopener noreferrer">Explore custom packaging trends.</a>
                    </p>
                  </div>
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
