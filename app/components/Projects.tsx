'use client';
import React, { useState, useEffect } from 'react';
import './Projects.scss';
import Navbar from '../components/Navbar'; 


interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  live: string;
}

interface SimpleProject {
  title: string;
  github: string;
}

const Projects = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeMobile, setActiveMobile] = useState<string | null>(null);

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

  const websiteProjects: Project[] = [
    { title: 'Checkin System', description: 'An attendance tracker checkin system.', tags: ['Next.Js', 'Tailwind'], image: '/code.jpg', github: 'https://github.com/samzana/attendance-tracker-frontend.git', live: 'https://attendance-tracker-frontend-eight.vercel.app/' },
    { title: 'Git Commands App', description: 'An offline app for all github commands.', tags: ['Javascript', 'PWA'], image: '/code.jpg', github: 'https://github.com/Lloydchogari/Git_Commands_Application.git', live: 'https://git-commands-application.vercel.app/' },
  ];

  const applicationProjects: Project[] = [
    { title: 'CM Logistics', description: 'A website for CM Logistics shipping company.', tags: ['React', 'SCSS'], image: '/code.jpg', github: 'https://github.com/Lloydchogari/CM-Logistics.git', live: 'https://cm-logistics.vercel.app/' },
    { title: 'Phone Number Detector', description: 'An offline app to detect the country of any phone number.', tags: ['HTML', 'Javascript'], image: '/code.jpg', github: 'https://github.com/Lloydchogari/PhoneNumberCountryDetector.git', live: 'https://countrynumberdetector.netlify.app/' },
  ];

  const otherProjects: SimpleProject[] = [
    { title: 'SP Club Fitness', github: 'https://github.com/Lloydchogari/SPCLUB_Fitness.git' },
    { title: 'Iphone Calculator', github: 'https://github.com/Lloydchogari/Calculator.git' },
    { title: 'Color Pallete', github: 'https://github.com/Lloydchogari/Color_Pallete.git' },
    { title: 'Superfet Farming', github: 'https://github.com/Lloydchogari/SuperFert_With_ReactJS.git' },
    { title: 'Payslip Generator', github: 'https://github.com/Lloydchogari/Payslip_Generator.git' },
    { title: 'Web Scrapper', github: 'https://github.com/Lloydchogari/Web-Scraper.git' },
    { title: 'Flying Plane', github: 'https://github.com/Lloydchogari/Flying_Plane.git' },
    { title: 'Typing Speed', github: 'https://github.com/Lloydchogari/TypingSpeed.git' },
    { title: 'PC Dasboard', github: 'https://github.com/Lloydchogari/PC_Dashboard.git' },
    { title: 'Sketch Drawing', github: 'https://github.com/Lloydchogari/Sketch-Drawing-.git' }
  ];

  const handleMobileClick = (title: string) => {
    setActiveMobile(activeMobile === title ? null : title);
  };

  const renderProjectCard = (project: Project) => (
    <div
      key={project.title}
      className={`project-card ${activeMobile === project.title ? 'active' : ''}`}
      onClick={() => handleMobileClick(project.title)}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="projects-page">
         {/* Fixed Navbar */}
         <Navbar/>
      <h1 className="intro-heading">My Projects</h1>
      
      <div className="projects-category-container">
        <div className="category website-projects">
          <h2>Websites</h2>
          {websiteProjects.map(renderProjectCard)}
        </div>

        <div className="category app-projects">
          <h2>Applications</h2>
          {applicationProjects.map(renderProjectCard)}
        </div>
      </div>

      <div className="others-projects">
        <h1>Others</h1>
        <div className="simple-project-list">
          {otherProjects.map(project => (
            <div key={project.title} className="simple-project-item">
              <span className="project-name">{project.title}</span>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;