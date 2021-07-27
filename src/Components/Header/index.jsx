import React from 'react';
import './styles.css';

function Header() {
  return(
    <div className="header">
      <div>
        <nav>
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#works">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </div>
  )
}

export default Header;
