import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Container, Row, Col } from "react-bootstrap";
import nodejsImage from '../images-webpage/nodejs.png';
import cssImage from '../images-webpage/css.png';
import htmlImage from '../images-webpage/html.png';
import javascriptImage from '../images-webpage/javascript.png';
import reactImage from '../images-webpage/react.png';
import mongodbImage from '../images-webpage/mongo-db.png';
import Webbook from './webbook';
import Webbook2 from './webbook2';
import Webbook3 from './webbook3';
import Webbook4 from './webbook4';
import Faqs from './faqs';



import Textbook5 from '../components/Textbook5';





export default function Banner() {
  const [paragraphText, setParagraphText] = useState("At Trivinsai, we specialize in creating cutting-edge web experiences tailored to your business needs. From interactive customer platforms to secure management portals, we ensure that our solutions are built on the latest technologies. Whether you're launching an e-commerce platform or a custom application, we focus on delivering exceptional quality with a clear and streamlined development process.");

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Function to handle resizing and updating text
    const handleResize = () => {
      if (window.innerWidth <= 420) {
        setParagraphText("At Trivinsai, we build modern web platforms tailored to your business needs using the latest technologies. Our solutions enhance customer experiences, streamline operations, and help your business grow with secure and scalable applications.");
      } else {
        setParagraphText("At Trivinsai, we specialize in creating cutting-edge web experiences tailored to your business needs. From interactive customer platforms to secure management portals, we ensure that our solutions are built on the latest technologies. Whether you're launching an e-commerce platform or a custom application, we focus on delivering exceptional quality with a clear and streamlined development process.");
      }
    };

    // Add event listener to handle resizing
    window.addEventListener('resize', handleResize);

    // Call the resize function initially to set the text based on the current screen size
    handleResize();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Navbar />
      <section className="banner" id="home">
        <Container fluid>
          <Row className="align-items-center rowflex justify-content-center">
            {/* Left Column: Animated Slider */}
            <Col className="text-center web-cards mb-5">
              <div className="slider-wrapper">
                <div className="slider" style={{ "--quantity": 6 }}>
                  <div className="item" style={{ "--position": 1 }}>
                    <img src={nodejsImage} alt="nodejsImage" />
                  </div>
                  <div className="item" style={{ "--position": 2 }}>
                    <img src={cssImage} alt="CSS" />
                  </div>
                  <div className="item" style={{ "--position": 4 }}>
                    <img src={htmlImage} alt="HTML" />
                  </div>
                  <div className="item" style={{ "--position": 6}}>
                    <img src={javascriptImage} alt="JavaScript" />
                  </div>
                  <div className="item" style={{ "--position": 3}}>
                    <img src={reactImage} alt="reactImage" />
                  </div>
                  <div className="item" style={{ "--position": 5}}>
                    <img src={mongodbImage} alt="mongodbImage" />
                  </div>
                </div>
              </div>
            </Col>

            {/* Right Column: Text Content */}
            <Col className="text-content1 mt-4">
              <h1 className="text-co" >INNOVATIVE WEBSITE SOLUTIONS</h1>
              <p className="text-co2"> {paragraphText}</p>
              <div className="custom-element">
               <div className="highlight-text">
                 Offering Custom MERN Solutions for Your Business
               </div>
               </div>


            </Col>
          </Row>
        </Container>
      </section>
      
      <Webbook/>
      <Webbook2/>
      <Webbook3/>

      <Webbook4/>

      <Faqs/>
      <Textbook5/>

      <Footer />
    </>
  );
}