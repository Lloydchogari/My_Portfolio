'use client';
import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaFacebook, FaInstagram, FaEnvelope, FaUserTie, FaDownload } from 'react-icons/fa';
import './About.scss';

const About = () => {
  const [animatedElements, setAnimatedElements] = useState([]);

  // Programming languages for the 3D sphere
  const programmingLanguages = [
    'JavaScript', 'React', 'Node.js', 'Python', 'TypeScript', 'HTML', 'CSS', 'MongoDB', 'SQL', 'Java', 'SCSS', 'Tailwind', 'NextJS', 'Typscript', 
  ];

  // Generate floating code elements
  useEffect(() => {
    const codeElements = [
      `<html>`, `</div>`, `function()`, `console.log()`, `<React />`, `{useState}`, `import`, `export`, 
      `const`, `let`, `var`, `class`, `async`, `await`, `=>`, `{}`, `[]`, `()`, `.map()`, `.filter()`,
      `<component>`, `useState()`, `useEffect()`, `return`, `if()`, `else`, `for`, `while`
    ];

    const elements = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      content: codeElements[Math.floor(Math.random() * codeElements.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: 0.2 + Math.random() * 0.5,
      direction: Math.random() * Math.PI * 2,
      size: 12 + Math.random() * 8
    }));

    setAnimatedElements(elements);

    const interval = setInterval(() => {
      setAnimatedElements(prev => 
        prev.map(el => ({
          ...el,
          x: (el.x + Math.cos(el.direction) * el.speed) % 100,
          y: (el.y + Math.sin(el.direction) * el.speed) % 100
        }))
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-page">
      {/* Animated code background */}
      <div className="code-animation">
        {animatedElements.map(el => (
          <span
            key={el.id}
            className="code-element"
            style={{
              left: `${el.x}%`,
              top: `${el.y}%`,
              fontSize: `${el.size}px`
            }}
          >
            {el.content}
          </span>
        ))}
      </div>

      {/* Main content */}
      <div className="main-content">
        
        {/* Profile Circle */}
        <div className="profile-container">
          <div className="profile-circle">
            <div className="profile-placeholder">
              👤
            </div>
          </div>
          <div className="profile-glow"></div>
        </div>

        {/* About Me Section */}
        <div className="intro-section">
          <h1 className="main-heading">About Me</h1>
          
          <div className="about-text">
            <p className="paragraph-one">
              I'm LLOYD DONNEL CHOGARI, a passionate Full Stack Developer who is obsessed with modern web technologies and a has keen eye for creating exceptional user experiences. With over a year of experience in both backend and mostly frontend development, I specialize in building scalable, responsive applications that solve real-world problems.
            </p>
            
            <p className="paragraph-two">
              My journey in tech has led me to master various programming languages and frameworks, always staying curious and eager to learn emerging technologies. I believe in writing clean, maintainable code and creating digital solutions that make a meaningful impact on users' lives.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="action-buttons">
          <button className="hire-btn">
            <div className="btn-content">
              <FaUserTie className="btn-icon" />
              <span>Hire Me</span>
            </div>
            <div className="btn-overlay"></div>
          </button>
          
          <button className="resume-btn">
            <div className="btn-content">
              <FaDownload className="btn-icon" />
              <span>Resume</span>
            </div>
            <div className="btn-overlay"></div>
          </button>
        </div>

        {/* Horizontal Scrolling Languages */}
        <div className="languages-container">
          <div className="languages-scroll">
            {[...programmingLanguages, ...programmingLanguages].map((lang, index) => (
              <div
                key={`${lang}-${index}`}
                className={`lang-tag lang-${index % 6}`}
              >
                {lang}
              </div>
            ))}
          </div>
        </div>

        {/* Social Icons */}
        <div className="social-section">
          <h2 className="social-heading">Let's Work Together!</h2>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link linkedin">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Lloydchogari" target="_blank" rel="noreferrer" className="social-link github">
              <FaGithub />
            </a>
            <a href="https://wa.me/780771627" target="_blank" rel="noreferrer" className="social-link whatsapp">
              <FaWhatsapp />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link facebook">
              <FaFacebook />
            </a>
            <a href="mailto:lloyddonnel44@gmail.com" className="social-link email">
              <FaEnvelope />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;