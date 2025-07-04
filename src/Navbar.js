import React from 'react';
import './Navbar.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaLink } from 'react-icons/fa';

const Navbar = () => (
  <nav className="navbar navbar-dark" role="navigation" aria-label="Main Navigation">
    <div className="navbar-logo">SA</div>
    <ul className="navbar-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div className="navbar-socials">
      <a href="mailto:officialsurag@gmail.com" aria-label="Email"><FaEnvelope /></a>
      <a href="https://linkedin.com/in/suragsunil" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
      <a href="https://github.com/suragms" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
      <a href="https://instagram.com/surag_sunil" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
      <a href="https://linktr.ee/suragdevstudio" target="_blank" rel="noopener noreferrer" aria-label="Linktree"><FaLink /></a>
    </div>
  </nav>
);

export default Navbar; 