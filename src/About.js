import React from 'react';
import './About.css';
import profileImg from './you.webp';

const About = () => (
  <section id="about" className="about-section-split">
    <div className="about-split-container">
      <div className="about-split-left">
        <img src={profileImg} alt="Surag Sunil" className="about-split-img" />
      </div>
      <div className="about-split-right">
        <h1 className="about-split-headline">About Me</h1>
        <div className="about-split-details">
          <p>I'm Surag, an enthusiastic AI/ML Engineer and Full Stack Developer passionate about building impactful tech solutions. I specialize in crafting intelligent systems that merge machine learning, clean backend logic, and user-friendly frontend experiences.</p>
          <p>With a strong foundation in Python, Django, scikit-learn, and JavaScript, I've developed end-to-end applications, including my featured project "Stress Detection for IT Professionals", which integrates AI models and a Rasa chatbot for real-time stress analysis.</p>
          <p>I thrive on solving real-world problems using data-driven approaches and enjoy learning emerging technologies that enhance both functionality and user experience.</p>
        </div>
      </div>
    </div>
  </section>
);

export default About; 