import React from 'react';
import './styles.css';

function Carousel({ pictures, current }) {
  return (
    <div id="carousel-parent">
      <i class="fas fa-chevron-left" />
      <div className="slides">
        { pictures.map(({ image }, index) => (
          <input type="radio" name="radio-btn" id={`radio${index}`} />
        ))}
        <div className="slide-images">
            <img src={ current } alt="project" />
        </div>
        <div className="navigation-manual">
          { pictures.map(({ image }, index) => (
            <label for={`radio${index}`} className="manual-btn" />
          ))}
        </div>
      </div>
      <i class="fas fa-chevron-right" />
    </div>
  );
}

export default Carousel;
