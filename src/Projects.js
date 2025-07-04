import React from 'react';
import './Projects.css';
import { FaBrain, FaMoneyCheckAlt, FaClock, FaGamepad } from 'react-icons/fa';

const projects = [
  {
    icon: <FaBrain className="project-card-icon" />,
    title: 'Stress Detection for IT Professionals',
    desc: 'ML-powered system to predict stress levels and provide chatbot support.',
    tags: ['AI/ML', 'HealthTech'],
  },
  {
    icon: <FaMoneyCheckAlt className="project-card-icon" />,
    title: 'Personal Finance Tracker',
    desc: 'Track income, expenses, and visualize reports with interactive charts.',
    tags: ['FinTech', 'Web App'],
  },
  {
    icon: <FaClock className="project-card-icon" />,
    title: 'Screen Time Tracker App',
    desc: 'Monitor screen time, manage tasks, and boost productivity.',
    tags: ['Productivity', 'REST API'],
  },
  {
    icon: <FaGamepad className="project-card-icon" />,
    title: 'Snake and Ladder – Django Edition',
    desc: 'Modern web-based Snake & Ladder game with high-score tracking.',
    tags: ['Game', 'Web App'],
  },
];

const Projects = () => (
  <section id="projects" className="projects-section-modern">
    <div className="projects-header">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-subtitle">A showcase of my latest work in web development, AI, and creative coding.</p>
    </div>
    <div className="projects-cards-row">
      {projects.map((proj, idx) => (
        <div className="project-card" key={idx}>
          <div className="project-card-icon-wrapper">{proj.icon}</div>
          <div className="project-card-overlay">
            <h3 className="project-card-title">{proj.title}</h3>
            <p className="project-card-desc">{proj.desc}</p>
            <div className="project-card-tags">
              {proj.tags.map((tag, i) => (
                <span className="project-card-tag" key={i}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects; 