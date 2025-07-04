import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPython, FaGitAlt, FaGithub, FaDatabase, FaServer, FaRobot, FaTerminal, FaBrain, FaUserLock, FaProjectDiagram, FaFilter, FaChartLine, FaCogs } from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiFlask, SiPostgresql, SiSqlite, SiJupyter, SiNetlify, SiRender, SiVercel, SiPostman, SiNumpy, SiPandas, SiScikitlearn, SiRasa, SiLinktree } from 'react-icons/si';

const skillGroups = [
  {
    title: '🚀 Frontend',
    items: [
      { icon: <FaHtml5 color="#e44d26" />, label: 'HTML5' },
      { icon: <FaCss3Alt color="#1572b6" />, label: 'CSS3' },
      { icon: <FaJs color="#f7df1e" />, label: 'JavaScript' },
      { icon: <FaReact color="#61dafb" />, label: 'React.js' },
      { icon: <SiTailwindcss color="#38bdf8" />, label: 'Tailwind CSS' },
      { icon: <FaBootstrap color="#7952b3" />, label: 'Bootstrap' },
    ],
  },
  {
    title: '🖥️ Backend',
    items: [
      { icon: <FaPython color="#3776ab" />, label: 'Python' },
      { icon: <SiDjango color="#092e20" />, label: 'Django' },
      { icon: <SiFlask color="#000" />, label: 'Flask' },
      { icon: <FaServer color="#1976d2" />, label: 'RESTful API' },
      { icon: <FaUserLock color="#1976d2" />, label: 'Auth & Sessions' },
    ],
  },
  {
    title: '🤖 AI/ML',
    items: [
      { icon: <SiScikitlearn color="#f7931e" />, label: 'scikit-learn' },
      { icon: <SiPandas color="#150458" />, label: 'pandas' },
      { icon: <SiNumpy color="#013243" />, label: 'NumPy' },
      { icon: <FaProjectDiagram color="#1976d2" />, label: 'ML Algorithms' },
      { icon: <FaFilter color="#1976d2" />, label: 'Data Preprocessing' },
      { icon: <FaChartLine color="#1976d2" />, label: 'Model Evaluation' },
      { icon: <FaBrain color="#1976d2" />, label: 'Stress Detection' },
    ],
  },
  {
    title: '💬 Chatbot',
    items: [
      { icon: <SiRasa color="#5d2e8c" />, label: 'Rasa' },
      { icon: <FaRobot color="#1976d2" />, label: 'NLU & Dialogue' },
      { icon: <FaCogs color="#1976d2" />, label: 'Custom Actions' },
      { icon: <SiDjango color="#092e20" />, label: 'Django Integration' },
    ],
  },
  {
    title: '🗃️ Database',
    items: [
      { icon: <SiSqlite color="#003b57" />, label: 'SQLite3' },
      { icon: <SiPostgresql color="#336791" />, label: 'PostgreSQL' },
      { icon: <FaDatabase color="#1976d2" />, label: 'Django ORM' },
      { icon: <FaDatabase color="#1976d2" />, label: 'SQL Queries' },
    ],
  },
  {
    title: '🛠️ Tools & Platforms',
    items: [
      { icon: <FaGitAlt color="#f34f29" />, label: 'Git' },
      { icon: <FaGithub color="#fff" />, label: 'GitHub' },
      { icon: <SiRender color="#1976d2" />, label: 'Render' },
      { icon: <SiNetlify color="#00c7b7" />, label: 'Netlify' },
      { icon: <SiVercel color="#000" />, label: 'Vercel' },
      { icon: <SiPostman color="#ff6c37" />, label: 'Postman' },
      { icon: <SiJupyter color="#f37626" />, label: 'Jupyter' },
      { icon: <SiLinktree color="#43e660" />, label: 'Linktree' },
      { icon: <FaTerminal color="#1976d2" />, label: 'CLI' },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="skills-section-stripes">
    <div className="skills-card skills-card-groups">
      <div className="skills-sidebar">🛠️ Skills</div>
      <div className="skills-main">
        <h2 className="skills-title">What I Do</h2>
        <p className="skills-desc">I'm a Full Stack Developer and AI/ML enthusiast with a passion for building intelligent and modern web applications. I focus on creating scalable backend systems, interactive frontends, and integrating machine learning for real-world impact.<br/><br/>Here are some of the technologies and platforms I work with:</p>
        <div className="skills-groups">
          {skillGroups.map((group, idx) => (
            <div className="skills-group" key={idx}>
              <div className="skills-group-title">{group.title}</div>
              <div className="skills-group-list">
                {group.items.map((item, i) => (
                  <div className="skill-item" key={i}>
                    <div className="skill-icon">{item.icon}</div>
                    <div className="skill-label">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills; 