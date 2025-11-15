import React from 'react';

const Services = () => {
  return (
    <section id="services" className="services">
      <p>Why Choose Us</p>
      <h3>Our Services</h3>
      <p>Our company offers a variety of services to meet your needs. See below for a list of our services.</p>
      <div className="service">
        <div className="service-image">
          <img src="/assets/ser1.gif" alt="Service 1" />
        </div>
        <div className="service-content">
          <h3>House Cleaning</h3>
          <p>Our team uses a sanitizing solution to wipe down light switches and doorknobs.</p>
        </div>
      </div>
      <div className="service">
        <div className="service-image">
          <img src="/assets/ser2.gif" alt="Service 2" />
        </div>
        <div className="service-content">
          <h3>Office Cleaning</h3>
          <p>We encourage our customers to let us know in advance of an appointment.</p>
        </div>
      </div>
      <div className="service">
        <div className="service-image">
          <img src="/assets/ser3.gif" alt="Service 3" />
        </div>
        <div className="service-content">
          <h3>Apartment Cleaning</h3>
          <p>We are telling our team members to switch out all cleaning cloths and mopheads.</p>
        </div>
      </div>
      <div className="dot1">
        <box-icon name='caret-right-circle' size='35px' color="beige" animation="burst-hover"></box-icon>
      </div>
    </section>
  );
};

export default Services;
