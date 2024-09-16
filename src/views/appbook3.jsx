import React from 'react';
import swiftLogo from '../images-apppage/swift1.png';
import kotlinLogo from '../images-apppage/kotlin1.png';
import javaLogo from '../images-apppage/java1.png';
import flutterLogo from '../images-apppage/flutter.png';
import reactNativeLogo from '../images-apppage/reactnative.png';
import dartLogo from '../images-apppage/dart.png';
import xamarinLogo from '../images-apppage/xamarin.png';
import ionicLogo from '../images-apppage/ionic.png';
import objectiveCLogo from '../images-apppage/C.png';
import sqliteLogo from '../images-apppage/sqlite.png';
import firebaseLogo from '../images-apppage/firebase.png';
import graphqlLogo from '../images-apppage/graphql.png';

export default function Appbook3() {
  const techData = [
    { key: 1, alt: 'Swift', src: swiftLogo, title: 'Swift' },
    { key: 2, alt: 'Kotlin', src: kotlinLogo, title: 'Kotlin' },
    { key: 3, alt: 'Java', src: javaLogo, title: 'Java' },
    { key: 4, alt: 'Flutter', src: flutterLogo, title: 'Flutter' },
    { key: 5, alt: 'Firebase', src: firebaseLogo, title: 'Firebase' } ,
    { key: 6, alt: 'Dart', src: dartLogo, title: 'Dart' },
    { key: 7, alt: 'Xamarin', src: xamarinLogo, title: 'Xamarin' },
    { key: 8, alt: 'Ionic', src: ionicLogo, title: 'Ionic' },
    { key: 9, alt: 'Objective-C', src: objectiveCLogo, title: 'Objective-C' },
    { key: 10, alt: 'SQLite', src: sqliteLogo, title: 'SQLite' },
   { key: 11, alt: 'GraphQL', src: graphqlLogo, title: 'GraphQL' },
    { key: 12, alt: 'React Native', src: reactNativeLogo, title: 'React Native' }
  ];

  return (
    <section className="tech-stack mt-4">
      <div className="container my-5">
        <div className="text-center mb-5 px-3"> 
          <h2 className="mb-2 techstack-title">Our Technology Stack</h2>
          <p className="mb-4">Your app will benefit from cutting-edge technologies, ensuring superior performance and scalability.</p>
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
