import React, { useState, useEffect } from 'react';
import Carousel from '../Carousel';
import Division from '../../Components/division';
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
    setPosition(0);
  }, [filter]);

  return (
    <div id="works">
      <Division>Works</Division>
      <div className="filters">
        <button
          onClick={() => setFilter('all')}
          className="button is-info"
        >
          All
        </button>
        <button
          onClick={() => setFilter('front-end')}
          className="button is-info"
        >
          Front-End
        </button>
        <button
          onClick={() => setFilter('back-end')}
          className="button is-info"
        >
          Back-End
        </button>
      </div>
      <Carousel pictures={results} current={position} onClick={setPosition} />
      <div className="galery">
        <div className="text">
          <h1 className="title is-1">{projects[position].info.title}</h1>
          <h2 className="subtitle is-3">{projects[position].info.subtitle}</h2>
          <p>{projects[position].info.about}</p>
          <br />
          <p>Checkout the web page or the repository using the links bellow:</p>
          <div className="links">
            <a href={projects[position].info.deployed} target="_blank" rel="noreferrer">
              <i class="fas fa-pager" />
            </a>
            <a href={projects[position].info.repository} target="_blank" rel="noreferrer">
            <i class="fas fa-code" />
            </a>
          </div>
        </div>
        <div className="galery-images">
          {projects[position].galery.map((image, index) => (
            <img src={image} alt="project-screen" key={`img-${index}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Works;
