import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';


export default function News() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // Scroll to top on route change

  return (
    <>
      <Navbar />
      <div className='news-page' style={{ marginTop: '80px',backgroundColor: '#fff' }} id='news'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 mb-4">
              <div className="card p-4 shadow-sm rounded">
                <p className='text-title'>Latest News</p>
                <p className='text-content'>
                  Stay updated with the latest news and updates from Trivinsai TechPackTron Solutions. We’re excited to share our recent achievements, upcoming events, and industry insights with you.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-10 col-lg-8 mb-4">
              <div className="card p-4 shadow-sm rounded">
                <p className='text-title'>Recent Updates</p>
                <div className='news-list'>
                  <div className="news-item mb-4">
                    <h5 className='text-subtitle'>Innovative IT Solutions Launch</h5>
                    <p className='text-content'>
                      We’re thrilled to announce the launch of our new suite of IT solutions, designed to revolutionize business operations and enhance productivity. This launch marks a significant milestone in our commitment to providing cutting-edge technology that meets the evolving needs of our clients. Our new solutions include advanced data analytics, improved cybersecurity measures, and seamless integration capabilities.
                    </p>
                  </div>
                  <div className="news-item mb-4">
                    <h5 className='text-subtitle'>Eco-Friendly Packaging Initiative</h5>
                    <p className='text-content'>
                      In our ongoing effort to promote sustainability, we’ve introduced a new eco-friendly packaging initiative. This initiative focuses on using biodegradable materials and reducing plastic waste in our packaging processes. By adopting these practices, we aim to contribute to a greener environment while continuing to deliver high-quality, innovative packaging solutions.
                    </p>
                  </div>
                  <div className="news-item mb-4">
                    <h5 className='text-subtitle'>Expansion of Office Facilities</h5>
                    <p className='text-content'>
                      We are excited to announce the expansion of our office facilities to accommodate our growing team. The new office space is designed to foster collaboration and creativity, with state-of-the-art amenities and flexible workspaces. This expansion reflects our commitment to providing a supportive and dynamic work environment for our employees.
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
