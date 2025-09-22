// Homepage.js

'use client';
import React from 'react';
import Link from 'next/link';
import Spline from '@splinetool/react-spline';
import { FaLinkedin, FaGithub, FaUser } from 'react-icons/fa';
import Navbar from '../components/Navbar'; 
import './Homepage.scss';

const Homepage = ({ onShowAbout }) => {
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
          Hi, I am <span>LLOYD</span>
        </h1>
      <h2 className="animated-text">
        Web Developer <span>[Full Stack]</span>
      </h2>

        {/* Social Icons */}
        <div className="social-icons">
          <div className="icon-wrapper">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
          <div className="icon-wrapper">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
          
           {/* About me button */}
          <div className="about-button">
            <button onClick={onShowAbout}>
              <FaUser className="about-icon" /> About&nbsp;Me
            </button>
       </div>
       </div>
      </div>

      {/* Background programming animation */}
      <div className="code-animation">
        <span>{`<div>`}</span>
        <span>{`</div>`}</span>
        <span>{`function()`}</span>
        <span>{`{}`}</span>
        <span>{`</hr>`}</span>
        <span>{`<html>`}</span>
        <span>{`<head>`}</span>
        <span>{`<body>`}</span> 
        <span>{`{}`}</span>
        <span>{`<br>`}</span>
        <span>{`<ul>`}</span>
        <span>{`<div>`}</span>
        <span>{`</div>`}</span>
        <span>{`function()`}</span>
        <span>{`console.log()`}</span>
        <span>{`<React />`}</span>
        <span>{`<li />`}</span>
        <span>{`<a />`}</span>


      </div>
    </div>
  );
};

export default Homepage;
