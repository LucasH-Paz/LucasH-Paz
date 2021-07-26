import React from 'react';
import './styles.css';

function Carousel({ pictures, current, onClick }) {
  return (
    <div id="carousel-parent">
      <i
        class="fas fa-chevron-left"
        onClick={ () => {
          if (current > 0 ) return onClick( current - 1);
          return;
        }}
      />
      <div className="slides">
        { pictures.map(({ image }, index) => (
          <input type="radio" name="radio-btn" id={`radio${index}`} key={ `label-${ index }`} />
        ))}
        <div className="slide-images">
            <img src={ pictures[current].image } alt="project" />
        </div>
        <div className="navigation-manual">
          { pictures.map(({ image }, index) => (
            <label
              for={`radio${index}`}
              className="manual-btn"
              key={ `label-${ index }`}
              style={{ background: index === current ? '#3c6e71' : 'none' } }
            />
          ))}
        </div>
      </div>
      <i
        class="fas fa-chevron-right"
        onClick={ () => {
          if ( current < pictures.length - 1 ) return onClick( current + 1);
          return;
        }}
      />
    </div>
  );
}

export default Carousel;
