import React from 'react';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="container">
        {/* Trusted by logos */}
        <div className="trusted-by">
          {/* Added more compact arrangement with smaller margins */}
          <img src="/logo-amazon.png" alt="Amazon" className="client-logo" />
          <img src="/logo-dribbble.png" alt="Dribbble" className="client-logo" />
          <img src="/logo-hubspot.png" alt="HubSpot" className="client-logo" />
          <img src="/logo-notion.png" alt="Notion" className="client-logo" />
          <img src="/logo-netflix.png" alt="Netflix" className="client-logo" />
          <img src="/logo-zoom.png" alt="Zoom" className="client-logo" />
        </div>

        {/* Services header */}
        <div className="services-header">
          <div className="section-title">
            <h2>Services</h2>
          </div>
          <div className="section-description">
            <p>
              At our digital marketing agency, we offer a range of services to
              help businesses grow and succeed online. These services include:
            </p>
          </div>
        </div>

        {/* Services cards */}
        <div className="services-cards">
          <div className="service-card">
            <div className="service-title">
              <h3>Search engine optimization</h3>
            </div>
            <div className="service-illustration">
              <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="60" r="25" fill="none" stroke="#000" strokeWidth="2" />
                <path d="M115 75 L140 100" stroke="#000" strokeWidth="3" />
                <circle cx="145" cy="105" r="8" stroke="#000" strokeWidth="2" fill="none" />
                <path d="M85 45 L115 75 M85 75 L115 45" stroke="#000" strokeWidth="1" />
                <circle cx="65" cy="100" r="15" stroke="#000" strokeWidth="1" fill="none" />
                <path d="M60 95 L70 105 M60 105 L70 95" stroke="#000" strokeWidth="1" />
              </svg>
            </div>
            <div className="learn-more">
              <button className="learn-more-btn">
                <span>Learn more</span>
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>

          <div className="service-card green">
            <div className="service-title">
              <h3>Pay-per-click advertising</h3>
            </div>
            <div className="service-illustration">
              <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
                <rect x="50" y="30" width="100" height="70" rx="5" fill="none" stroke="#000" strokeWidth="1" />
                <circle cx="60" cy="40" r="2" fill="#000" />
                <circle cx="70" cy="40" r="2" fill="#000" />
                <circle cx="80" cy="40" r="2" fill="#000" />
                <path d="M90 70 L110 50" stroke="#000" strokeWidth="2" />
                <path d="M105 50 L115 50 L115 60" stroke="#000" strokeWidth="2" fill="none" />
                <circle cx="90" cy="70" r="10" stroke="#000" strokeWidth="2" fill="white" />
                <path d="M85 70 L95 70 M90 65 L90 75" stroke="#000" strokeWidth="2" />
              </svg>
            </div>
            <div className="learn-more">
              <button className="learn-more-btn">
                <span>Learn more</span>
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;