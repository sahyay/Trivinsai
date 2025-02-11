import React from 'react'
import rahul from '../images/avatar.jpg'
import sahil from '../images/avatar.jpg'
// import tushar from '../images/tushar.png'

import devki from '../images/avatar.jpg'
import rohan from '../images/avatar.jpg'
// import vishal from '../images/vishal.jpg'





export default function Textbook4() {
  return (
    <div className="container border">
      <div className="team-section ">
    <div className="team-content">
        <h2 className="team-title">Meet Our Team</h2>
        <div className="team-grid">
        {/* card1 */}
            <div className="team-card">
                <div className="team-text">
                Guiding Trivinsai TechPackTron Solutions, our director fosters innovation and excellence. Their leadership and strategic vision have been pivotal in driving our success and setting new industry benchmarks.
                </div>
                <div className="team-avatar">
                    <img src={rahul} alt="rahul-avatar" className=" avatar-img"/>
                </div>
                <div className="team-details">
                    <h3 className="team-name">Rahul Sharma</h3>
                    <p className="team-position">Director</p>
                </div>
            </div>
           {/* card2 */}
            <div className="team-card">
                <div className="team-text">
                Leading Trivinsai TechPackTron Solutions, our director promotes creativity and excellence. Their guidance and strategic insight have been crucial in advancing our success and establishing new industry standards.
                </div>
                <div className="team-avatar devki">
                    <img src={devki} alt="devki-avatar" className=" avatar-img"/>
                </div>
                <div className="team-details">
                    <h3 className="team-name">Devki Metri</h3>
                    <p className="team-position">Director</p>
                </div>
            </div>
         {/* card3 */}
            <div className="team-card">
                <div className="team-text">
                Driving our technological innovations, our tech partner ensures we stay ahead in the industry. Their expertise and vision are key to our continual advancement and success in a competitive landscape.
                </div>
                <div className="team-avatar">
                    <img src={sahil} alt="sahil-avatar" className="sahil avatar-img"/>
                </div>
                <div className="team-details">
                    <h3 className="team-name">Sahil Phadke</h3>
                    <p className="team-position">Tech Partner</p>
                </div>
            </div>
           {/* card4 */}
            <div className="team-card">
                <div className="team-text">
                Overseeing creative projects, our artwork manager blends innovation and artistry seamlessly. Their keen eye and leadership have been pivotal in producing visually stunning and impactful designs that set us apart.
               </div>
                <div className="team-avatar">
                    <img src={rohan} alt="rohan-avatar" className="rohan avatar-img"/>
                </div>
                <div className="team-details">
                    <h3 className="team-name">Rohan Sharma</h3>
                    <p className="team-position">Artwork Manager</p>
                </div>
            </div>
              {/* card5*/}
              {/* <div className="team-card">
                <div className="team-text">
                Interpreting complex data, our data analyst transforms numbers into actionable insights. Their analytical skills and precision are critical in driving data-informed decisions that propel our organization forward.
                </div>
                <div className="team-avatar">
                    <img src={vishal} alt="vishal-avatar" className="vishal avatar-img"/>
                </div>
                <div className="team-details">
                    <h3 className="team-name">Vishal Sharma</h3>
                    <p className="team-position">Data Analyst</p>
                </div>
            </div> */}
              {/* card6 */}
              {/* <div className="team-card">
                <div className="team-text">
                Guiding our sales team, our sales manager excels in strategy and execution. Their expertise and leadership have been instrumental in driving revenue growth and fostering strong client relationships.
                </div>
                <div className="team-avatar">
                    <img src="" alt="Ashis-avatar" className="avatar-img"/>
                </div>
                <div className="team-details">
                    <h3 className="team-name">Ashis C</h3>
                    <p className="team-position">Sales Manager</p>
                </div>
            </div> */}
        </div>
    </div>
</div>

    </div>
  )
}
