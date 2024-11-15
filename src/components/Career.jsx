import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';


export default function Career() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // Scroll to top on route change

  return (
    <>
      <Navbar />
      <div className='career-page' style={{ marginTop: '80px',backgroundColor: '#fff' }} id='career'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 mb-4">
              <div className="card p-4 shadow-sm rounded">
                <p className='text-title'>Join Our Team</p>
                <p className='text-content'>
                  At Trivinsai TechPackTron Solutions, we are passionate about innovation, quality, and customer success. We are always on the lookout for talented and motivated individuals who share our vision of transforming the business landscape through cutting-edge technology and exceptional service.
                </p>
                <h5 className='text-subtitle'>Why Work With Us?</h5>
                <ul className='text-content'>
                  <li><strong>Innovative Environment:</strong> We foster a culture of creativity and innovation where your ideas can turn into impactful solutions.</li>
                  <li><strong>Growth and Development:</strong> We believe in nurturing talent and providing opportunities for continuous learning and professional development.</li>
                  <li><strong>Diverse Opportunities:</strong> From IT consulting to unique packaging solutions, our diverse range of services offers exciting career paths.</li>
                  <li><strong>Work-Life Balance:</strong> We value the well-being of our employees and provide a flexible work environment to maintain a healthy work-life balance.</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-10 col-lg-8 mb-4">
              <div className="card p-4 shadow-sm rounded">
                <p className='text-title'>Current Openings</p>
                <div className='job-list'>
                  <div className="job-item mb-4">
                    <h5 className='text-subtitle'>IT Solutions Architect</h5>
                    <p className='text-content'><strong>Responsibilities:</strong> Design and implement IT infrastructure, lead technology initiatives, ensure seamless integration.</p>
                    <p className='text-content'><strong>Requirements:</strong> 5+ years of experience in IT architecture, strong knowledge of cloud computing, and excellent problem-solving skills.</p>
                  </div>
                  <div className="job-item mb-4">
                    <h5 className='text-subtitle'>Packaging Designer</h5>
                    <p className='text-content'><strong>Responsibilities:</strong> Create custom packaging solutions, work with clients to deliver eco-friendly and branded packaging.</p>
                    <p className='text-content'><strong>Requirements:</strong> 2+ years of experience in packaging design, knowledge of sustainable materials, and creativity.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-10 col-lg-8 mb-4">
              <div className="card p-4 shadow-sm rounded">
                <p className='text-title'>How to Apply</p>
                <p className='text-content'>
                  If you are ready to take the next step in your career, send your resume and cover letter to <a href="mailto:marketing@trivinsai.com" className='text-primary'>marketing@trivinsai.com</a> We look forward to hearing from you!
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
