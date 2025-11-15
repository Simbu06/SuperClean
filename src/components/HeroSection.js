import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-image">
        <img src="/assets/hero.jpg" alt="Cleaner with supplies" />
      </div>
      <div className="hero-content">
        <h4>Maid for You</h4>
        <h1>A Cleaner Place is a Safer Place.</h1>
        <p>Washla cleaning service. We are a company dedicated to giving our customers back the time they deserve to enjoy the things they love.</p>
        <div className="features-1">
          <div className="feature1">
            <img src="/assets/pro.gif" alt="Professional Cleaning" />
            <h3>Professional Cleaning</h3>
            <p>Housekeeping is responsible for minor security in the hotel.</p>
          </div>
          <div className="feature1">
            <img src="/assets/fast.gif" alt="Fast and Efficient" />
            <h3>Fast and Efficient</h3>
            <p>Both of us take a lot of time in getting cleaned Clean Home.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
