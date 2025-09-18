'use client';
import React, { useState, useEffect } from 'react';
import './Projects.scss';
import clock from './public/clock.png';


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
    { title: 'FitSnap', description: 'A fitness progress sharing app.', tags: ['React', 'Tailwind'], image: '/projects/clock.png', github: '#', live: '#' },
    { title: 'Alumni Wall', description: 'Alumni share success stories.', tags: ['Python', 'Streamlit'], image: '/projects/alumni.png', github: '#', live: '#' },
    { title: 'Portfolio Site', description: 'Personal developer portfolio.', tags: ['HTML', 'CSS', 'JS'], image: '/projects/portfolio.png', github: '#', live: '#' },
    { title: 'SPClub', description: 'Gym membership management.', tags: ['Next.js', 'SCSS'], image: '/projects/spclub.png', github: '#', live: '#' },
  ];

  const applicationProjects: Project[] = [
    { title: 'Malaria Dashboard', description: 'Interactive malaria stats dashboard.', tags: ['React', 'Plotly'], image: '/projects/malaria.png', github: '#', live: '#' },
    { title: 'Task Manager', description: 'Manage daily tasks efficiently.', tags: ['React', 'Firebase'], image: '/projects/task.png', github: '#', live: '#' },
    { title: 'Chat App', description: 'Real-time chat application.', tags: ['Node.js', 'Socket.io'], image: '/projects/chat.png', github: '#', live: '#' },
    { title: 'Weather App', description: 'Weather forecasting app.', tags: ['React', 'API'], image: '/projects/weather.png', github: '#', live: '#' },
  ];

  const otherProjects: Project[] = Array.from({ length: 10 }, (_, i) => ({
    title: `Other Project ${i + 1}`,
    description: 'A small interesting project.',
    tags: ['Misc'],
    image: '/projects/other.png',
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
          <h2>Website Projects</h2>
          {websiteProjects.map(renderProjectCard)}
        </div>

        <div className="category app-projects">
          <h2>Application Projects</h2>
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
