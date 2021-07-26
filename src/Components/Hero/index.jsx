import React from 'react';
import './styles.css';

function Hero() {
  return (
    <header id="hero">
      <div className="container-header">
        <div>
          <h1 className="title is-1">Welcome</h1>
          <h2 className="subtitle is-3">
            I'm so glad in having you here, go ahead and check out some of my works.
          </h2>
        </div>
        <button type="button" className="button is-large is-primary is-outlined">
          Explore the Projects
        </button>
      </div>
    </header>
  )
}

export default Hero;
