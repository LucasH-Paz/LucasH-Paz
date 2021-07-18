import React from 'react';
import Particles from 'react-particles-js';
import './styles.css';

function Hero() {
  return (
    <div>
      <Particles
        params={{
          "particles": {
            "number": {
              "value": 50
            },
            "size": {
              "value": 3
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        }} />
    </div>
  )
}

export default Hero;
