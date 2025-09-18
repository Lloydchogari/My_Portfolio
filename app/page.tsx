'use client';
import React, { useState } from 'react';
import Navbar from '../app/components/Navbar';
import Homepage from '../app/components/Homepage';
import Skills from '../app/components/Skills';
import Projects from '../app/components/Projects';
import Contact from '../app/components/Contact'; 
import './page.scss';

export default function Home() {
  const [view, setView] = useState('home');

  const getRotation = () => {
    switch (view) {
      case 'home':
        return 'rotateY(0deg)';
      case 'skills':
        return 'rotateY(-90deg)';
      case 'projects':
        return 'rotateY(-180deg)';
      case 'contact':
        return 'rotateY(-270deg)'; // ✅ 4th face
      default:
        return 'rotateY(0deg)';
    }
  };

  return (
    <div className="flip-container">
      <Navbar setView={setView} />
      <div
        className="flip-box"
        style={{
          transform: getRotation(),
          transition: 'transform 0.8s ease-in-out',
        }}
      >
        {/* Home Face */}
        <div className="face home-face">
          <Homepage />
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
    </div>
  );
}
