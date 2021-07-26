import React from 'react';
// import Particles from 'react-particles-js';
import './styles.css';

function Hero() {
  return (
    <div id="hero">
      {/* <Particles
        params={{
          "particles": {
            "number": {
              "value": 150
            },
            "size": {
              "value": 3
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": false,
                "mode": "repulse"
              }
            }
          }
        }} */}
      {/* /> */}
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
  )
}

export default Hero;
