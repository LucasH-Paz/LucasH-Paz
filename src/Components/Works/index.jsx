import React, { useState, useEffect } from 'react';
import Carousel from '../Carousel';
import projects from './data.js';
import './styles.css';

function Works() {
  const [results, setResults] = useState(projects);
  const [filter, setFilter] = useState('all');
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const doFiltering = projects.filter((project) => {
      if (filter === 'back-end') return project.type === 'back-end';
      if (filter === 'front-end') return project.type === 'front-end';
      return project;
    });
    setResults(doFiltering);
  }, [filter]);

  return(
    <div id="works">
      <div>
        <button
          onClick={ () => setFilter('all') }
          className="button is-primary"
        >
          All
        </button>
        <button
          onClick={ () => setFilter('front-end') }
          className="button is-primary"
        >
          Front-End
        </button>
        <button
          onClick={ () => setFilter('back-end') }
          className="button is-primary"
        >
          Back-End
        </button>
      </div>
      <Carousel pictures={ results } current={ position } onClick={ setPosition } />
      <div className="galery">
        <div className="text">
          <h1 className="title is-1">{ projects[position].info.title }</h1>
          <h2 className="subtitle is-3">{ projects[position].info.subtitle }</h2>
          <p>{ projects[position].info.about }</p>
        </div>
        <div className="galery-images">
          { projects[position].galery.map((image, index) => (
            <img src={ image } alt="project-screen" key={ `img-${index}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Works;
