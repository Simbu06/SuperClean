import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <div className="footer-section logo-section">
          <img src="/assets/logo.png" alt="Logo" className="footer-logo" />
        </div>
        <div id="contact" className="footer-section contact-section">
          <h3>Get in Touch</h3>
          <p>Address: 123 Street, City, Country</p>
          <p>Phone: +1234567890</p>
          <p>Email: info@example.com</p>
        </div>
        <div className="footer-section links-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#footer">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section newsletter-section">
          <h3>Our Newsletter</h3>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <form action="#">
            <input type="email" placeholder="Email Address" required />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
