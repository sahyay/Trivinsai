import React from 'react';
import mobileapp from '../images-apppage/mobileapp.jpg';
import enterpriseapp from '../images-apppage/enterpriseapp.jpg';
import apidev from '../images-apppage/apidev.jpg';
import realtimemobile from '../images-apppage/realtimemobile.jpg';
import ecommerceapp from '../images-apppage/ecommerceapp.jpg';
import appmaintenance from '../images-apppage/appmaintenance.jpg';

export default function Appbook2() {
    const appData = [
        { key: 1, alt: 'Mobile Application Development', src: mobileapp, title: 'Mobile Application Development' },
        { key: 2, alt: 'Custom App Development for Enterprises', src: enterpriseapp, title: 'Enterprise App Development' },
        { key: 3, alt: 'E-Commerce Mobile Applications', src: ecommerceapp, title: 'E-Commerce Mobile Applications' },
        { key: 4, alt: 'Real-Time Mobile Applications', src: realtimemobile, title: 'Real-Time Mobile Applications' },
        { key: 5, alt: 'API Development and Integration for Mobile Apps', src: apidev, title: 'API Development for Mobile Apps' },
        { key: 6, alt: 'App Maintenance and Support', src: appmaintenance, title: 'App Maintenance & Support' }
    ];

    return (
        <div id="services" className="container border-top border-bottom my-5">
            <div className="text-center mb-4">
                <h2 className="techstack-title mt-4">App Services We Offer</h2>
            </div>
            <div>
                <div className="row mb-4 text-center">
                    {appData.map((solutions) => (
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
