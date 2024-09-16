import React, { useState } from 'react';

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null); 

  const faqs = [
    {
      question: "What is the average cost of web development services?",
      answer:
        "Web development costs depend largely on the complexity and scope of the project. A basic solution could cost a few thousand dollars, while more complex systems, like enterprise-level applications, will have a significantly higher price. Contact us to discuss your needs, and we'll provide a tailored estimate.",
    },
    {
      question: "How long does it take to build a web solution?",
      answer:
        "The time required to develop a web solution can range from several weeks to several months. Small projects typically take less time, while complex applications, such as e-commerce or enterprise solutions, may require a few months. We can offer a more detailed timeline after understanding your specific requirements.",
    },
    {
      question: "What is a progressive web app?",
      answer:
        "A progressive web app (PWA) combines the functionality of a mobile app with the accessibility of a website. It can be used offline and sends push notifications, making it a great choice for businesses looking to offer users an app-like experience without needing a traditional mobile app.",
    },
    {
      question: "What technologies do you use for web development?",
      answer:
        "Our development team leverages modern technologies like React, Node.js, MongoDB, and Express.js, among others. We carefully choose the appropriate tech stack based on your project's specific goals and needs to ensure the best performance and scalability.",
    },
    {
      question: "What web development innovations do you use?",
      answer:
        "We integrate cutting-edge innovations such as microservices, serverless architectures, and progressive web apps (PWAs) to ensure your web solution is scalable and future-proof. We also explore AI and machine learning to provide more advanced features when required.",
    },
    {
      question: "How can I prepare before working with Trivinsai TechPackTron Solutions?",
      answer:
        "Before partnering with us, having a clear understanding of your project’s scope, budget, and timeline will make the process smoother. Even a rough idea of these aspects will help us guide you better and offer a customized solution tailored to your business.",
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
                  color: activeIndex === index ? '#ff6900' : '#808080', 
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
