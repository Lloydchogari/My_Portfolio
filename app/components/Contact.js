'use client';
import React, { useState, useEffect } from 'react';
import { FaGithub, FaWhatsapp, FaFacebook, FaLinkedin, FaInstagram, FaCog, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.scss';

const Contact = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="contact-page">
      {/* Dark mode spotlight effect */}
      {darkMode && <div className="spotlight-effect"></div>}
      
      {/* Floating background animations */}
      <div className="floating-icons">
        {[...Array(20)].map((_, i) => (
          <FaCog key={i} className="floating-cog" style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 5}s`
          }} />
        ))}
      </div>

      <div className="contact-container">
        {/* Left Side - Contact Info */}
        <div className="contact-info">
          <h1>Get In Touch</h1>
          
          <div className="contact-details">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>lloyd.developer@email.com</span>
            </div>
            
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+263 123 456 789</span>
            </div>
            
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Harare, Zimbabwe</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="social-section">
            <div className="social-icons">
              <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="social-link whatsapp">
                <FaWhatsapp />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link facebook">
                <FaFacebook />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link linkedin">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link instagram">
                <FaInstagram />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link github">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="form-section">
          <div className="form-container">
            <h2>Send Me A Message</h2>
            <p>I'm always open to exciting opportunities and collaborations. Let's work together!</p>

            <div className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows={5} required />
              <button type="submit">Send Message</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        © {new Date().getFullYear()} Lloyd. All Rights Reserved.
      </div>
    </div>
  );
};

export default Contact;