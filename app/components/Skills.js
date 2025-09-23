'use client';
import React, { useState, useEffect } from 'react';
import './Skills.scss';

const Skills = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentCode, setCurrentCode] = useState('javascript');
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

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

  // Code snippets for auto-typing animation
  const codeSnippets = {
    javascript: `// JavaScript
function hireMeMessage() {
  console.log("Hire me, I'll make you proud!");
  return "Ready to build amazing things!";
}
hireMeMessage();`,
    python: `# Python
def hire_me_message():
    print("Hire me, I'll make you proud!")
    return "Ready to build amazing things!"

hire_me_message()`
  };

  // Auto-typing effect
  useEffect(() => {
    let timeout;
    const snippet = codeSnippets[currentCode];
    let index = 0;

    const typeWriter = () => {
      if (index < snippet.length) {
        setDisplayText(snippet.slice(0, index + 1));
        index++;
        timeout = setTimeout(typeWriter, 50);
      } else {
        setIsTyping(false);
        // Switch to the other language after 3 seconds
        timeout = setTimeout(() => {
          setIsTyping(true);
          setDisplayText('');
          setCurrentCode(currentCode === 'javascript' ? 'python' : 'javascript');
        }, 3000);
      }
    };

    if (isTyping) {
      typeWriter();
    }

    return () => clearTimeout(timeout);
  }, [currentCode, isTyping]);

  // Languages data with real image URLs
  const languages = [
    { name: 'HTML5', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#e34c26', description: 'Semantic markup' },
    { name: 'CSS3', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '#1572b6', description: 'Modern styling' },
    { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#f7df1e', description: 'Dynamic interactions' },
    { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776ab', description: 'Backend & AI' },
    { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61dafb', description: 'UI Components' },
    { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#68a063', description: 'Server runtime' },
    { name: 'Next.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#000000', description: 'Full-stack framework' },
    { name: 'Tailwind', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', color: '#06b6d4', description: 'Utility-first CSS' }
  ];

  // Jobs I can do
  const jobs = [
    { title: 'Web Development', description: 'Transform your ideas into stunning, responsive websites that captivate users and drive results. From sleek landing pages to complex web applications.' },
    { title: 'Backend Development', description: 'Build robust, scalable server architectures that power your applications. APIs, databases, and cloud solutions that grow with your business.' },
    { title: 'Software Development', description: 'Create custom software solutions tailored to your unique needs. Desktop apps, mobile solutions, and enterprise systems that deliver excellence.' },
    { title: 'UI/UX Design', description: 'Design intuitive, beautiful user experiences that convert visitors into customers. User research, prototyping, and pixel-perfect interfaces.' }
  ];

  return (
    <div className="skills-page">
      {/* 3D Robot */}
      <div className="spline-scene">
        <iframe
          src="https://my.spline.design/genkubgreetingrobot-cu1aQHht65BGLoRxI2rnay8k/"
          frameBorder="0"
          width="100%"
          height="100%"
          allowFullScreen
          title="Spline Scene"
        />
      </div>

      {/* Main heading */}
      <h1 className="intro-heading">
        Nice to meet you, I'm <span>LLOYD</span>
      </h1>

      {/* Code Animation */}
      <div className="code-animation">
        <div className="code-header">
          <div className="window-controls">
            <span className="control red"></span>
            <span className="control yellow"></span>
            <span className="control green"></span>
          </div>
          <span className="file-name">
            {currentCode === 'javascript' ? 'hire_me.js' : 'hire_me.py'}
          </span>
        </div>
        <div className="code-content">
          <pre>
            <code className={currentCode}>
              {displayText}
              <span className="cursor">|</span>
            </code>
          </pre>
        </div>
      </div>

      {/* Languages Grid */}
      <div className="languages-section">
        <div className="languages-grid">
          {languages.map((lang, index) => (
            <div 
              key={lang.name} 
              className="language-card"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                '--hover-color': lang.color
              }}
            >
              <div className="card-inner">
                <div className="card-front">
                  <img 
                    src={lang.image} 
                    alt={lang.name} 
                    className="lang-image"
                  />
                  <h3>{lang.name}</h3>
                </div>
                <div className="card-back">
                  <p>{lang.description}</p>
                  <div className="expertise-level">
                    <div className="level-bar" style={{ backgroundColor: lang.color }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Jobs Section */}
      <div className="jobs-section">
        <div className="jobs-container">
          <h2>What I Can Build For You</h2>
          <div className="jobs-unified-card">
            {jobs.map((job, index) => (
              <div key={job.title} className="job-item">
                <div className="job-content">
                  <h3>{job.title}</h3>
                  <p>{job.description}</p>
                </div>
                {index < jobs.length - 1 && <div className="job-divider"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating particles for visual enhancement */}
      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
        {[...Array(8)].map((_, i) => (
          <div 
            key={`explosive-${i}`} 
            className="explosive-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Skills;