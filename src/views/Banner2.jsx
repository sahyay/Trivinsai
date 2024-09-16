import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import reactNativeImage from '../images-apppage/react-native.png';
import swiftImage from '../images-apppage/swift.png';
import kotlinImage from '../images-apppage/kotlin.png';
import javaImage from '../images-apppage/java.png';
import flutterImage from '../images-apppage/flutter.png';
import sqliteImage from '../images-apppage/sqlite.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Appbook from './appbook';
import Faqs2 from './Faqs2';
import Textbook5 from '../components/Textbook5';
import Appbook2 from './appbook2';
import Appbook4 from './appbook4';
import Appbook3 from './appbook3';






export default function Banner2() {
  const [paragraphText, setParagraphText] = useState("At Trivinsai, we specialize in crafting state-of-the-art mobile applications tailored to your business needs. From cross-platform solutions to native apps, we ensure our apps are built using the latest technologies to deliver seamless performance and a smooth user experience.");

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleResize = () => {
      if (window.innerWidth <= 420) {
        setParagraphText("At Trivinsai, we develop cutting-edge mobile apps to meet your business needs. Whether it's Android, iOS, or cross-platform, we use modern tools to deliver high-quality, secure, and scalable apps.");
      } else {
        setParagraphText("At Trivinsai, we specialize in crafting state-of-the-art mobile applications tailored to your business needs. From cross-platform solutions to native apps, we ensure our apps are built using the latest technologies to deliver seamless performance and a smooth user experience.");
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <Navbar/>
      <section className="banner" id="home">
        <Container fluid>
          <Row className="align-items-center rowflex justify-content-center">
            <Col className="text-center web-cards mb-5">
              <div className="slider-wrapper">
                <div className="slider" style={{ "--quantity": 6 }}>
                  <div className="item" style={{ "--position": 1 }}>
                    <img src={reactNativeImage} alt="React Native" />
                  </div>
                  <div className="item" style={{ "--position": 2 }}>
                    <img src={swiftImage} alt="Swift" />
                  </div>
                  <div className="item" style={{ "--position": 4 }}>
                    <img src={kotlinImage} alt="Kotlin" />
                  </div>
                  <div className="item" style={{ "--position": 6 }}>
                    <img src={javaImage} alt="Java" />
                  </div>
                  <div className="item" style={{ "--position": 3 }}>
                    <img src={flutterImage} alt="flutter" />
                  </div>
                  <div className="item" style={{ "--position": 5 }}>
                    <img src={sqliteImage} alt="SQLite" />
                  </div>
                </div>
              </div>
            </Col>

            <Col className="text-content1 mt-4">
              <h1 className="text-co">INNOVATIVE MOBILE APP SOLUTIONS</h1>
              <p className="text-co2">{paragraphText}</p>
              <div className="custom-element">
                <div className="highlight-text">
                  Offering Custom Cross-Platform Solutions for Your Business
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

<Appbook/>
<Appbook2/>
<Appbook3/>
<Appbook4/>
<Faqs2/>
<Textbook5/>
      <Footer/>
    </>
  );
}
