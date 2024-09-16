import React from 'react';
import webapp from '../images-webpage/webapp.jpg';
import Enterprisesweb from '../images-webpage/Enterprise.jpg';
import api from '../images-webpage/api.jpg';
import realtimeweb from '../images-webpage/Realtimeweb.jpg';
import Ecom from '../images-webpage/Ecom.jpg';
import webmaintanance from '../images-webpage/webmaintanance.jpg';

export default function Webbook2() {
    const webData = [
        { key: 1, alt: 'Web Application Development', src: webapp, title: 'Web Application Development' },
        { key: 2, alt: 'Custom Web Development for Enterprises', src: Enterprisesweb, title: 'Enterprises Web Development' },
        { key: 3, alt: 'Business Website Development', src: Ecom, title: 'Business Website Development' },
        { key: 4, alt: 'Real-Time Web Applications', src: realtimeweb, title: 'Real-Time Web Applications' },
        { key: 5, alt: 'API Development and Integration', src: api, title: 'API Development' },
        { key: 6, alt: 'Website Maintenance and Support', src: webmaintanance, title: 'Website Maintenance & Support' }
    ];

    return (
        <div id="services" className="container border-top border-bottom my-5">
            <div className="text-center mb-4">
                <h2 className="techstack-title mt-4">Web Services We Offer</h2>
            </div>
            <div>
                <div className="row mb-4 text-center">
                    {webData.map((solutions) => (
                        <div key={solutions.key} className="col-md-4 col-sm-6 mb-4"> 
                            <div className="client-box">
                                <img src={solutions.src} alt={solutions.alt} className="img-fluid" />
                                <h5 className="mt-3 tech-title">{solutions.title}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
