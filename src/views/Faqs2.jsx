import React, { useState } from 'react';

export default function Faqs2() {
  const [activeIndex, setActiveIndex] = useState(null); 

  const faqs = [
    {
      question: "What is the average cost of app development services?",
      answer:
        "App development costs vary depending on the complexity and features of the app. Basic apps may cost a few thousand dollars, while complex enterprise-level apps or apps with advanced functionalities could cost significantly more. Contact us for a detailed estimate based on your specific needs.",
    },
    {
      question: "How long does it take to build a mobile app?",
      answer:
        "The time required to develop a mobile app depends on its complexity. Simple apps may take a few weeks, while more advanced applications with custom features or integrations can take several months. We'll provide a detailed timeline after reviewing your requirements.",
    },
    {
      question: "What is a hybrid app?",
      answer:
        "A hybrid app is developed using web technologies like HTML, CSS, and JavaScript but functions like a native app on both Android and iOS platforms. This allows for quicker development and easier maintenance compared to building separate native apps for each platform.",
    },
    {
      question: "What technologies do you use for app development?",
      answer:
        "Our app development team uses technologies like React Native, Swift, Kotlin, and Flutter. We select the best tech stack based on your app's specific needs, ensuring high performance, scalability, and a great user experience.",
    },
    {
      question: "What app development innovations do you use?",
      answer:
        "We incorporate modern technologies such as cloud integration, AI, machine learning, and push notifications to enhance the functionality of mobile apps. We also use progressive web app (PWA) principles to offer a seamless experience across different platforms.",
    },
    {
      question: "How can I prepare before working with Trivinsai TechPackTron Solutions for app development?",
      answer:
        "To ensure a smooth app development process, having a clear understanding of your app’s features, target audience, and budget will help. Even if you only have a basic idea, we can assist you in refining your concept and provide a tailored solution for your business.",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center techstack-title mb-5">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item mb-4" key={index}>  
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
                style={{
                  color: activeIndex === index ? '#ffb300' : '#808080', 
                  borderTop: '1px solid #e0e0e0',
                  borderBottom: '1px solid #e0e0e0',
                  padding: '20px 10px',
                  fontSize: '18px',
                  backgroundColor: '#fff',
                  transition: 'color 0.3s ease',
                }}
                onClick={() => {
                  setActiveIndex(activeIndex === index ? null : index); 
                }}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div
                className="accordion-body"
                style={{
                  color: '#808080',
                  padding: '20px 10px',
                  borderTop: '1px solid #e0e0e0',
                  borderBottom: '1px solid #e0e0e0',
                }}
              >
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
