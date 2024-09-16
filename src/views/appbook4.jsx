import React from 'react';

export default function Appbook4() {
  const stepsData = [
    {
      stepNumber: '1',
      title: 'Planning & Strategy',
      description:
        'We start by understanding your app requirements, business goals, and target audience. Our team creates a detailed project roadmap, setting the foundation for a successful app development journey.',
    },
    {
      stepNumber: '2',
      title: 'Design & Prototyping',
      description:
        'Our designers craft intuitive, user-friendly app interfaces. We create prototypes to visualize how the app will look and function, ensuring it aligns with your vision and provides a great user experience.',
    },
    {
      stepNumber: '3',
      title: 'Development & Testing',
      description:
        'Our development team builds the app using agile methodologies, ensuring regular feedback and iteration. Rigorous testing is done to ensure the app is free from bugs and performs flawlessly across devices.',
    },
    {
      stepNumber: '4',
      title: 'Launch & Maintenance',
      description:
        'After successful testing, we deploy your app to app stores. Post-launch, we provide ongoing maintenance, updates, and support to ensure the app stays current and functional.',
    },
  ];

  return (
    <section className="steps-section">
      <div className="container my-5 border-bottom">
        <hr className="section-separator" />

        <div className="text-center mb-5">
          <h2 className='step-header'>Our App Development Process</h2>
          <p>We ensure your app stays competitive and functional post-launch.</p>
        </div>

        <div className="row text-center mb-3">
          {stepsData.map((step, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="step-box">
                <div className="step-number">{step.stepNumber}</div>
                <h5 className="step-title">{step.title}</h5>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
