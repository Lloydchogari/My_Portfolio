'use client';
import React, { useState, useEffect } from 'react';
import './Projects.scss';
image: '/clock.png'
image: '/gitpic.jpg'


interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  live: string;
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
    { title: 'Checkin System', description: 'An attendance tracker checkin system.', tags: ['Next.Js', 'Tailwind'], image: '/clock.png', github: '#', live: 'https://attendance-tracker-frontend-eight.vercel.app/' },
    { title: 'Git Commands App', description: 'An offline app for all github commands.', tags: ['Javascript', 'PWA'], image: '/clock.png', github: '#', live: 'https://git-commands-application.vercel.app/' },
  ];

  const applicationProjects: Project[] = [
    { title: 'CM Logistics', description: 'A website for CM Logistics shipping company.', tags: ['React', 'SCSS'], image: '/clock.png', github: '#', live: 'https://cm-logistics.vercel.app/' },
    { title: 'Phone Number Detector', description: 'An offline app to detect the country of any phone number.', tags: ['HTML', 'Javascript'], image: '/clock.png', github: '#', live: 'https://countrynumberdetector.netlify.app/' },
  ];

  const otherProjects: Project[] = Array.from({ length: 10 }, (_, i) => ({
    title: `Other Project ${i + 1}`,
    description: 'A small interesting project.',
    tags: ['Misc'],
    image: '/clock.png',
    github: '#',
    live: '#',
  }));

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
          <a href={project.github} target="_blank">GitHub</a>
          <a href={project.live} target="_blank">Live</a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="projects-page">
      <h1 className="intro-heading">My Projects</h1>
      
      <div className="projects-category-container">
        <div className="category website-projects">
          {websiteProjects.map(renderProjectCard)}
        </div>

        <div className="category app-projects">
          {applicationProjects.map(renderProjectCard)}
        </div>
      </div>

      <div className="category others-projects">
        <h1>Others</h1>
        <div className="others-grid">
          {otherProjects.map(renderProjectCard)}
        </div>
      </div>
    </div>
  );
};

export default Projects;
