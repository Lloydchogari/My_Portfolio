'use client';
import React, { useState, useEffect } from 'react';
import { FaGithub, FaWhatsapp, FaFacebook, FaLinkedin, FaInstagram, FaCog } from 'react-icons/fa';
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

     {/* 3D Robot */}
      <div className="spline-background">
        <iframe
          src="https://my.spline.design/genkubgreetingrobot-cu1aQHht65BGLoRxI2rnay8k/"
          frameBorder="0"
          width="100%"
          height="90%"
          style={{ position: 'absolute', left: '20%' }}
          allowFullScreen
          title="Spline Scene"
        ></iframe>
      </div>

      {/* Contact Text + Form */}
      <div className="alltext">
        <h1>Let’s Connect</h1>
        <p>I’m always open to exciting opportunities and collaborations. Let’s work together!</p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required />
          <button type="submit">Send Message</button>
        </form>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaWhatsapp /></a>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        © {new Date().getFullYear()} Your Name. All Rights Reserved.
      </div>
    </div>
  );
};

export default Contact;
