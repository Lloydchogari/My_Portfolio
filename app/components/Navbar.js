'use client';

import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Navbar.scss';

const Navbar = ({ setView }) => {
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

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="navbar">
      <ul>
        <li onClick={() => setView('home')}>Home</li>
        <li onClick={() => setView('skills')}>Skills</li>
        <li onClick={() => setView('projects')}>Projects</li>
        <li onClick={() => setView('contact')}>Contact</li>
      </ul>

      {/* Theme toggle */}
      <button className="theme-toggle" onClick={toggleDarkMode}>
        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>
    </div>
  );
};

export default Navbar;
