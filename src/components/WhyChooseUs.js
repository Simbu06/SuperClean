import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us</h2>
      <h3>Tradition of Trust</h3>
      <p>We specialize in intelligent & effective Search and believe in the power of partnerships to grow business.</p>
      <div className="features">
        <div className="feature">
          <img src="/assets/prof.gif" alt="Professional Team Icon" />
          <h4>Professional Team</h4>
          <p>Our team uses a sanitizing solution to wipe down light switches and doorknobs.</p>
        </div>
        <div className="feature">
          <img src="/assets/help.gif" alt="24/7 Services Icon" />
          <h4>24/7 Services</h4>
          <p>We encourage our customers to let us know in advance of an appointment.</p>
        </div>
        <div className="feature">
          <img src="/assets/guar.gif" alt="Service Guarantee Icon" />
          <h4>Service Guarantee</h4>
          <p>We are telling our team members to switch out all cleaning cloths and mopheads.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
