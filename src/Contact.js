import React from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaLink } from 'react-icons/fa';

const Contact = () => (
  <section id="contact" className="contact-section-soft">
    <div className="contact-card contact-card-single">
      <img src={require('./my.webp')} alt="Surag Sunil" className="contact-profile-img" />
      <h2 className="contact-title">📬 Contact Me</h2>
      <p className="contact-subtitle">Feel free to reach out for collaboration, project inquiries, or just to connect!</p>
      <ul className="contact-list">
        <li><FaEnvelope className="contact-list-icon" /> <span className="contact-list-label">Email:</span> <a href="mailto:officialsurag@gmail.com">officialsurag@gmail.com</a></li>
        <li><FaLinkedin className="contact-list-icon" /> <span className="contact-list-label">LinkedIn:</span> <a href="https://linkedin.com/in/suragsunil" target="_blank" rel="noopener noreferrer">linkedin.com/in/suragsunil</a></li>
        <li><FaGithub className="contact-list-icon" /> <span className="contact-list-label">GitHub:</span> <a href="https://github.com/suragms" target="_blank" rel="noopener noreferrer">github.com/suragms</a></li>
        <li><FaInstagram className="contact-list-icon" /> <span className="contact-list-label">Instagram:</span> <a href="https://instagram.com/surag_sunil" target="_blank" rel="noopener noreferrer">instagram.com/surag_sunil</a></li>
        <li><FaLink className="contact-list-icon" /> <span className="contact-list-label">Linktree:</span> <a href="https://linktr.ee/suragdevstudio" target="_blank" rel="noopener noreferrer">linktr.ee/suragdevstudio</a></li>
      </ul>
    </div>
  </section>
);

export default Contact; 