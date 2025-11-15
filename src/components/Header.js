import React, { useState } from 'react';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleLinkClick = () => {
    setMenuActive(false);
  };

  return (
    <>
      <div id="home" className="top">
        <div className="top_left">
          <div className="contact_info">
            <img src="/assets/call.svg" alt="logo" className="call_logo logo" />
            <span className="ph_no">+919345044366</span>
          </div>
          <div className="contact_info">
            <img src="/assets/mail.svg" alt="logo" className="mail_logo logo" />
            <span className="mail_id">silambarsan.rs@gmail.com</span>
          </div>
        </div>
        <div className="top_right">
          <button className="btn">
            <img src="/assets/facebook.svg" alt="logo" className="fb_logo logo" />
          </button>
          <button className="btn">
            <img src="/assets/twitter.svg" alt="logo" className="twitter_logo logo" />
          </button>
          <button className="btn">
            <img src="/assets/linkedin.svg" alt="logo" className="linkedin_logo logo" />
          </button>
          <button className="btn">
            <img src="/assets/instagram.svg" alt="logo" className="insta_logo logo" />
          </button>
          <div className="quote">
            <button className="btn quote-btn">
              <img src="/assets/profile.svg" alt="logo" className="profile_logo logo" />
              <span className="qtu">GET A QUOTE</span>
            </button>
          </div>
        </div>
        <button className="burger-menu" onClick={toggleMenu}>
          <box-icon name='menu' size='40px' color="#001F3F" animation="tada-hover"></box-icon>
        </button>
      </div>
      <div className="header">
        <div className="header_left">
          <img src="/assets/logo.png" alt="logo" className="main_logo" />
        </div>
        <div className={`header_right ${menuActive ? 'active' : ''}`}>
          <ul>
            <li><a href="#home" onClick={handleLinkClick}>HOME</a></li>
            <li><a href="#footer" onClick={handleLinkClick}>ABOUT</a></li>
            <li><a href="#team" onClick={handleLinkClick}>PAGES</a></li>
            <li><a href="#services" onClick={handleLinkClick}>GALLERY</a></li>
            <li><a href="#hero" onClick={handleLinkClick}>BLOG</a></li>
            <li><a href="#contact" onClick={handleLinkClick}>CONTACT</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
