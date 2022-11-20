import React from 'react';
import './index.scss';

function Footer() {
  return (
    <footer className="text-lg-start bg-light text-muted">
      <div
        className="p-4 text-uppercase footer-text"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      >
        Copyright © 2020
      </div>
    </footer>
  );
}

export default Footer;
