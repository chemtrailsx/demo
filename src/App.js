import React from 'react';
import './App.css';
import ServicesSection from './components/ServicesSection';
import { WorkingProcessSection, TestimonialsSection } from './components/ProcessTestimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container header-container">
          <div className="logo">
            <img src="/logo.svg" alt="Positivus" />
            <span className="logo-text">Positivus</span>
          </div>
          <nav className="navigation">
            <ul>
              <li><a href="#about">About us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#use-cases">Use Cases</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </nav>
          <button className="quote-button">Request a quote</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-container">
            <div className="hero-content">
              <h1>Navigating the digital landscape for success</h1>
              <p>
                Our digital marketing agency helps businesses 
                grow and succeed online through a range of 
                services including SEO, PPC, social media marketing, 
                and content creation.
              </p>
              <button className="consultation-button">Book a consultation</button>
            </div>
            <div className="hero-image">
              <div className="megaphone-illustration">
                {/* SVG illustration or image here */}
                <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="200" cy="200" rx="150" ry="100" fill="none" stroke="#000" strokeWidth="2" />
                  <path d="M100,200 L300,100 L350,130 L150,230 Z" fill="#B4FF73" stroke="#000" strokeWidth="2" />
                  <rect x="80" y="180" width="30" height="100" fill="#000" />
                  <circle cx="350" cy="100" r="20" fill="#000" />
                  <circle cx="300" cy="270" r="30" fill="#B4FF73" stroke="#000" strokeWidth="2" />
                  <circle cx="380" cy="170" r="30" fill="#B4FF73" stroke="#000" strokeWidth="2" />
                  <circle cx="310" cy="370" r="30" fill="#B4FF73" stroke="#000" strokeWidth="2" />
                  <circle cx="380" cy="300" r="40" fill="#000" />
                  <path d="M250,50 L270,30 L290,50 L270,70 Z" fill="#000" />
                </svg>
              </div>
              <div className="social-icons">
                <div className="icon heart-icon"><span>❤️</span></div>
                <div className="icon share-icon"><span>↗️</span></div>
                <div className="icon play-icon"><span>▶️</span></div>
                <div className="icon location-icon"><span>📍</span></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services section */}
        <ServicesSection />
        
        {/* Working Process section */}
        <WorkingProcessSection />
        
        {/* Testimonials section */}
        <TestimonialsSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;