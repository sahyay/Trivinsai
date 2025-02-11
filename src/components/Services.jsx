import React, { useState } from 'react';
import Service from './Service';
import ITPRODUCTCONSULTATION from '../images/img2.jpg';
// import ELECTRONICSUPPLIES from '../images/img5.jpg';
import CYBERSECURITY from '../images/img3.jpg';
// import UNIQUEPACKING from '../images/img7.jpg';
// import OFFICESTATIONARY  from '../images/img8.jpg';
import ITINFRASTRUCTURESETUP from '../images/img6.jpg';
import NETWORKSOLUTION from '../images/img4.jpg';
// import OFFICENECESSITIES from '../images/img1.jpg';
import WEBDEV from '../images/webdev.png';
import APPDEV from '../images/appdev.jpg';




export default function Services() {
    const cardData = [
        { key: 1, alt: 'cardimage1', src: ITPRODUCTCONSULTATION, title: 'IT PRODUCT CONSULTATION', text: 'Receive expert guidance on choosing the right IT products tailored to your business needs, ensuring optimal functionality and efficiency.' },
        { key: 2, alt: 'cardimage2', src: ITINFRASTRUCTURESETUP, title: 'IT INFRASTRUCTURE SETUP', text: 'Efficiently set up robust IT infrastructure tailored to your business, ensuring seamless integration and optimal performance for scalability.' },
        { key: 3, alt: 'cardimage3', src:NETWORKSOLUTION, title: 'NETWORK SOLUTIONS', text: 'Optimize your network with custom solutions that ensure reliable connectivity, enhanced security, and seamless integration for efficient business operations.' },
        { key: 4, alt: 'cardimage4', src:  CYBERSECURITY, title: 'CYBER SECURITY', text: 'Protect your business with robust cybersecurity measures, ensuring data integrity, threat prevention, and compliance with industry standards for peace of mind.' },
        { key: 5, alt: 'cardimage5', src:WEBDEV, title: ' WEB DEVELOPMENT', text: 'Optimize your web presence with custom solutions that ensure reliable performance, enhanced security, and seamless integration for efficient business operations.' },
        { key: 6, alt: 'cardimage6', src:  APPDEV, title: 'APP DEVELOPMENT', text: 'Optimize your mobile experience with custom solutions that ensure reliable functionality, enhanced security, and seamless integration for efficient business operations.' },
        
        // { key: 5, alt: 'cardimage6', src: ELECTRONICSUPPLIES, title: 'ELECTRONIC SUPPLIES', text: 'Equip your office with essential electronic supplies, including computers, monitors, printers, scanners, and routers, to ensure a tech-savvy and efficient workspace that supports all employee functions.' },
        // { key: 6, alt: 'cardimage5', src: OFFICENECESSITIES, title: 'OFFICE NECESSITIES', text: 'Equip your office with essential supplies and equipment, such as desks, chairs, footrest, business cards, trash can and desk lamp  to create a productive and efficient workspace that meets all employee needs.' },
        // { key: 7, alt: 'cardimage7', src: OFFICESTATIONARY , title: 'OFFICE STATIONARY ', text: ' Equip your office with essential stationery supplies, such as pens, pencils, paper, notebooks, staplers, and file folders, to maintain an organized and productive workspace for all your administrative needs.' },
        // { key: 8, alt: 'cardimage8', src: UNIQUEPACKING, title: 'UNIQUE PACKING SERVICES', text: 'Offer unique packing services that include custom packaging solutions, eco-friendly materials, personalized branding, and efficient logistics, ensuring your items are securely packed and presented with a professional touch.' }
    ];

    const [visibleCards, setVisibleCards] = useState(4);

    const showMoreCards = () => {
        setVisibleCards(cardData.length);
    };

    return (
        <div className='container border my-5 py-5' id='services'>
            <div className="text-center">
                {/* <p className="mb-2 fs-4">What We Can Do</p> */}
                <h1 className="servicetitle mb-4"> Services We Do</h1>
                {/* <p className="servicedescription mb-5">IT Solutions, Unique and Special Packaging, Electronic Supplies and Office Supplies.</p> */}
            </div>

            <div className="row">
                {cardData.slice(0, visibleCards).map((card) => (
                    <div key={card.key} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 d-flex justify-content-center">
                        <Service alt={card.alt} src={card.src} title={card.title} text={card.text} />
                    </div>
                ))}
            </div>

            {visibleCards < cardData.length && (
                <div className="text-center my-3">
                    <button className=" btn-custom start-button" onClick={showMoreCards}>View More</button>
                </div>
            )}
        </div>
    );
}
