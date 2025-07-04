import React from 'react';
import './Home.css';
import profileImg from './sura.png';

const Home = () => (
  <section id="home" className="home-hero-split">
    <div className="home-hero-container">
      <div className="home-hero-side home-hero-left">
        <h2 className="home-hero-title designer">Designer</h2>
        <p className="home-hero-desc">AI/ML & Full Stack Developer with a passion for building intelligent, efficient, and user-friendly systems.</p>
      </div>
      <div className="home-hero-center">
        <img src={profileImg} alt="Profile" className="home-hero-img" />
      </div>
      <div className="home-hero-side home-hero-right">
        <h2 className="home-hero-title coder">&lt;coder&gt;</h2>
        <p className="home-hero-desc">AI/ML Engineer and Full Stack Developer focused on developing robust backend logic, smart prediction systems, and responsive frontend interfaces using clean, scalable code.</p>
      </div>
    </div>
  </section>
);

export default Home; 