import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css'; // Ensure you have this CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">Made with ❤️ by Raksha</p>
      <div className="social-links">
        <a
          href="https://github.com/RP2025"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/raksha-pahariya-409842227/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn className="social-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
