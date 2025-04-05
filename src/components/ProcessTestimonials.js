import React, { useState } from 'react';

const WorkingProcessSection = () => {
  const [activeStep, setActiveStep] = useState('01');

  const toggleStep = (stepId) => {
    if (activeStep === stepId) {
      setActiveStep(null);
    } else {
      setActiveStep(stepId);
    }
  };

  return (
    <section className="working-process-section">
      <div className="container">
        <div className="process-header">
          <div className="section-title">
            <h2>Our Working Process</h2>
          </div>
          <div className="section-subtitle">
            <p>Step-by-Step Guide to Achieving Your Business Goals</p>
          </div>
        </div>

        <div className="process-steps">
          <div className={`process-step ${activeStep === '01' ? 'active' : ''}`}>
            <div className="step-header" onClick={() => toggleStep('01')}>
              <div className="step-number">01</div>
              <div className="step-title">Consultation</div>
              <button className="toggle-btn">
                {activeStep === '01' ? '-' : '+'}
              </button>
            </div>
            {activeStep === '01' && (
              <div className="step-content">
                <p>
                  During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing
                  efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
                </p>
              </div>
            )}
          </div>

          <div className={`process-step ${activeStep === '02' ? 'active' : ''}`}>
            <div className="step-header" onClick={() => toggleStep('02')}>
              <div className="step-number">02</div>
              <div className="step-title">Research and Strategy Development</div>
              <button className="toggle-btn">
                {activeStep === '02' ? '-' : '+'}
              </button>
            </div>
            {activeStep === '02' && (
              <div className="step-content">
                <p>
                  After consultation, we conduct thorough market research to understand your industry, competitors, and target audience.
                  Based on our findings, we develop a customized digital marketing strategy aligned with your business goals.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      author: "John Smith",
      position: "Marketing Director at XYZ Corp"
    },
    {
      id: 2,
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      author: "John Smith",
      position: "Marketing Director at XYZ Corp"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <div className="section-title">
            <h2>Testimonials</h2>
          </div>
          <div className="section-subtitle">
            <p>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
          </div>
        </div>

        <div className="testimonials-slider">
          <div className="testimonials-container">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-content">
                  <p>"{testimonial.text}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-name">{testimonial.author}</div>
                  <div className="author-position">{testimonial.position}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="slider-controls">
            <button className="slider-prev">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor" />
              </svg>
            </button>
            <div className="slider-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <button className="slider-next">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { WorkingProcessSection, TestimonialsSection };