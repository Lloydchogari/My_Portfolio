'use client';

import React from 'react';
import Spline from '@splinetool/react-spline';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Navbar from '../components/Navbar'; 
import './Homepage.scss';

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Fixed Navbar */}
      <Navbar />

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

      {/* Text + Animated */}
      <div className="intro-text">
        <h1 className="animated-text">
          Hi, I am <span>Bro</span>
        </h1>
        <h2 className="animated-text">Web Developer [Full Stack]</h2>

        {/* Social Icons + Download */}
        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="/BroPortfolio.pdf" download>
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
