'use client';
import React from 'react';
import Spline from '@splinetool/react-spline';
import { FaLinkedin, FaGithub, FaWhatsapp, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
import Navbar from '../components/Navbar'; 
import './About.scss';

const About = () => {
  return (
    <div className="about-page">


      {/* Background programming animation */}
      <div className="code-animation">
        <span>{`<html>`}</span>
        <span>{`<body>`}</span>
        <span>{`<div>`}</span>
        <span>{`{}`}</span>
        <span>{`function()`}</span>
        <span>{`console.log()`}</span>
        <span>{`<React />`}</span>
        <span>{`<a />`}</span>
        <span>{`<li />`}</span>
        <span>{`<ul>`}</span>
      </div>

      {/* Top-right 3D animation */}
      <div className="spline-background">
        <iframe
          src="https://my.spline.design/genkubgreetingrobot-cu1aQHht65BGLoRxI2rnay8k/"
          frameBorder="0"
          width="400"
          height="400"
          style={{ position: 'absolute', top: '20px', right: '20px' }}
          allowFullScreen
          title="Spline Scene"
        ></iframe>
      </div>

      {/* Center Circle with Image */}
      <div className="profile-container">
        <div className="profile-circle">
          <img src="/profile.jpg" alt="Profile" />
        </div>
        {/* About Me Text */}
        <div className="intro-text">
            <h1>Hi, I'm Lloyd</h1>
            <p className="animated-text">
                I am a Full Stack Web Developer with a passion for building clean and modern web applications. I love creating interactive experiences that make life easier.
            </p>
        </div>


        {/*  MY Social Icons */}
        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="mailto:your@email.com"><FaEnvelope /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
};

export default About;
