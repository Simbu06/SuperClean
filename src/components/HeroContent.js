import React from 'react';

const HeroContent = () => {
  return (
    <div className="content">
      <div className="arr_left">
        <box-icon name='chevron-left' size='70px' color="white" animation="fade-left-hover"></box-icon>
      </div>
      <div className="top_text">
        <p className="smltxt align">RENEW YOUR LOOK</p>
        <p className="mntxt align">A TRADITION OF<br />QUALITY CLEANING</p>
        <button className="con-btn">
          <span className="cont"> Contact Us </span>
        </button>
      </div>
      <div className="arr_right">
        <box-icon name='chevron-right' size='70px' color="white" animation="fade-right-hover"></box-icon>
      </div>
    </div>
  );
};

export default HeroContent;
