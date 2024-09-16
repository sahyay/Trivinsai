import React from 'react';

export default function Webbook4() {
  const stepsData = [
    {
      stepNumber: '1',
      title: 'Kick-Off Stage',
      description:
        'We begin by gathering your requirements and ideas, translating them into technical documents and initial prototypes. Our team drafts an early design to set the groundwork for the project.',
    },
    {
      stepNumber: '2',
      title: 'Development Stage',
      description:
        'Our team develops the solution while keeping you updated through regular feedback sessions. We use Scrum methodology to review results bi-weekly, perform User Acceptance Testing, and deploy the application.',
    },
    {
      stepNumber: '3',
      title: 'Support Stage',
      description:
        'After the launch, we provide ongoing server monitoring, fix bugs, and offer customer support. We implement contingency plans and address any significant issues swiftly to ensure smooth operation.',
    },
    {
      stepNumber: '4',
      title: 'Next Steps',
      description:
        'To adapt to changing demands, web apps need regular updates. We offer a cost-effective team to handle these updates. Future cooperation and ongoing support are discussed post-deployment.',
    },
  ];

  return (
    <section className="steps-section">
      <div className="container my-5 border-bottom">
        <hr className="section-separator" />

        <div className="text-center mb-5">
          <h2 className='step-header'>Our Web Development Process</h2>
          <p>We ensure the continuous operation of your solution after deployment.</p>
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
