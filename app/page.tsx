'use client';
import React, { useState } from 'react';
import Navbar from '../app/components/Navbar';
import Homepage from '../app/components/Homepage';
import Skills from '../app/components/Skills';
import Projects from '../app/components/Projects';
import Contact from '../app/components/Contact'; 
import About from '../app/components/About'; 
import './page.scss';

export default function Home() {
  const [view, setView] = useState('home');
  const [showAboutSheet, setShowAboutSheet] = useState(false);

  const getRotation = () => {
    switch (view) {
      case 'home':
        return 'rotateY(0deg)';
      case 'about':  
        return 'rotateY(-360deg)';
      case 'skills':
        return 'rotateY(-90deg)';
      case 'projects':
        return 'rotateY(-180deg)';
      case 'contact':
        return 'rotateY(-270deg)';
      default:
        return 'rotateY(0deg)';
    }
  };

  const handleShowAbout = () => {
    setShowAboutSheet(true);
  };

  const handleCloseAbout = () => {
    setShowAboutSheet(false);
  };

  return (
    <div className="flip-container">
      <Navbar setView={setView} />
      <div className="flip-box" style={{
  transform: getRotation(),
  transition: 'transform 0.8s ease-in-out',
}}>
  {/* Home Face */}
  <div className="face home-face">
    <Homepage onShowAbout={handleShowAbout} />
  </div>

  {/* Skills Face */}
  <div className="face skills-face">
    <Skills />
  </div>

  {/* Projects Face */}
  <div className="face projects-face">
    <Projects />
  </div>

  {/* Contact Face */}
  <div className="face contact-face">
    <Contact />
  </div>
</div>

{/* Sliding About Sheet */}
<div className={`about-overlay ${showAboutSheet ? 'show' : ''}`}>
  <button className="close-btn" onClick={handleCloseAbout}>×</button>
  <About />
</div>

    </div>
  );
}