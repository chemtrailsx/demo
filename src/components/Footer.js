import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <img src="/logo.svg" alt="Positivus" />
              <span className="logo-text">Positivus</span>
            </div>
            
            <div className="footer-contact">
              <div className="contact-label">Contact us:</div>
              
              <div className="contact-info">
                <div className="contact-item">Email: info@positivus.com</div>
                <div className="contact-item">Phone: 555-567-8901</div>
                <div className="contact-item">
                  Address: 1234 Main St<br />
                  Moonstone City, Stardust State 12345
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-right">
            <div className="newsletter-form">
              <input type="email" placeholder="Email" className="email-input" />
              <button className="subscribe-button">Subscribe to news</button>
            </div>
          </div>
        </div>
        
        <div className="footer-nav">
          <ul className="footer-menu">
            <li><a href="#about-us">About us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#use-cases">Use Cases</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
          
          <div className="social-links">
            <a href="#linkedin" className="social-link">
              <img src="/linkedin-icon.svg" alt="LinkedIn" />
            </a>
            <a href="#facebook" className="social-link">
              <img src="/facebook-icon.svg" alt="Facebook" />
            </a>
            <a href="#twitter" className="social-link">
              <img src="/twitter-icon.svg" alt="Twitter" />
            </a>
          </div>
        </div>
        
        <hr className="footer-divider" />
        
        <div className="footer-bottom">
          <div className="copyright">© 2023 Positivus. All Rights Reserved.</div>
          <div className="privacy-policy">
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;