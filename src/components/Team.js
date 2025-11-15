import React from 'react';

const Team = () => {
  return (
    <section id="team" className="team-section">
      <div className="team-header">
        <h4>Meet Our</h4>
        <h1>Our Team</h1>
        <p>The member of our highly experienced team is dedicated to providing you with only the best service we can possibly provide.</p>
      </div>
      <div className="team-container">
        <div className="team-card">
          <img src="/assets/card1.jpg" alt="Monica Gordon" />
          <div className="team-info">
            <h3>Monica Gordon</h3>
            <p>House Cleaning</p>
          </div>
        </div>
        <div className="team-card">
          <img src="/assets/card2.jpg" alt="Laura Jones" />
          <div className="team-info">
            <h3>Laura Jones</h3>
            <p>Cleaner</p>
          </div>
        </div>
        <div className="team-card">
          <img src="/assets/card3.jpg" alt="Sara Ryan" />
          <div className="team-info">
            <h3>Sara Ryan</h3>
            <p>House Cleaner</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
