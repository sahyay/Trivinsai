import React from 'react';
import rubyLogo from '../images-webpage/ruby.png';
import pythonLogo from '../images-webpage/python.png';
import phpLogo from '../images-webpage/php.png';
import angularLogo from '../images-webpage/angularjs.png';
import reactLogo from '../images-webpage/react1.png';
import javascriptLogo from '../images-webpage/js.png';
import nodejsLogo from '../images-webpage/nodejs1.png';
import jqueryLogo from '../images-webpage/jquery.png';
import css3 from '../images-webpage/css3.png';
import vueLogo from '../images-webpage/vue.png';
import html5 from '../images-webpage/html5.png';
import bootstrap from '../images-webpage/bootstrap.png';

export default function webbook3() {
  const techData = [
    { key: 1, alt: 'CSS', src: css3, title: 'CSS' },
    { key: 2, alt: 'HTML5', src: html5, title: 'HTML5' },
    { key: 3, alt: 'Python', src: pythonLogo, title: 'Python' },
    { key: 4, alt: 'PHP', src: phpLogo, title: 'PHP' },
    { key: 5, alt: 'AngularJS', src: angularLogo, title: 'AngularJS' },
    { key: 6, alt: 'React', src: reactLogo, title: 'React' },
    { key: 7, alt: 'JavaScript', src: javascriptLogo, title: 'JavaScript' },
    { key: 8, alt: 'NodeJS', src: nodejsLogo, title: 'NodeJS' },
    { key: 9, alt: 'jQuery', src: jqueryLogo, title: 'jQuery' },
    { key: 10, alt: 'Vue.js', src: vueLogo, title: 'Vue.js' },
   { key: 11, alt: 'Ruby', src: rubyLogo, title: 'Ruby' },
    { key: 12, alt: 'Bootstrap', src: bootstrap, title: 'Bootstrap' }
  ];

  return (
    <section className="tech-stack mt-4">
      <div className="container my-5">
        <div className="text-center mb-5 px-3"> 
          <h2 className="mb-2 techstack-title">Our Technology Stack</h2>
          <p className="mb-4">Your website will benefit from unmatched development expertise using the latest approaches and technologies.</p>
        </div>
        <div className="row gx-4 gy-4"> 
          {techData.map((tech) => (
            <div key={tech.key} className="col-6 col-md-3 text-center mb-4">
              <img src={tech.src} alt={tech.alt} className="img-fluid mb-3" style={{ maxHeight: '60px', marginBottom: '18px' }} />
              <h5 className='tech-title'>{tech.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
