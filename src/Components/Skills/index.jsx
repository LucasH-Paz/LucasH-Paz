import React from 'react';
import js from '../../images/js_logo.png';
import html from '../../images/html_logo.png';
import css from '../../images/css_logo.png';
import react from '../../images/react_logo.webp';
import redux from '../../images/redux_logo.png';
import bootstrap from '../../images/bootstrap_logo.png';
import bulma from '../../images/bulma_logo.png';
import git from '../../images/git_logo.png';
import github from '../../images/github_logo.png';
import jest from '../../images/jest_logo.png';
import hooks from '../../images/reactHooks_logo.png';
import './styles.css';

function Skills() {
  const logos = [
    {
      image: js,
      name: 'JavaScript'
    },
    {
      image: html,
      name: 'HTML 5'
    },
    {
      image: css,
      name: 'CSS 3'
    },
    {
      image: react,
      name: 'React JS'
    },
    {
      image: redux,
      name: 'Redux'
    },
    {
      image: bootstrap,
      name: 'Bootstrap'
    },
    {
      image: bulma,
      name: 'Bulma'
    },
    {
      image: git,
      name: 'Git'
    },
    {
      image: github,
      name: 'Github'
    },
    {
      image: jest,
      name: 'Jest'
    },
    {
      image: hooks,
      name: 'Hooks'
    }
  ];

  return(
    <div id='skills'>
      <p>
        In this section you can check some of the languages and tools I've been working with.
        I'm always learning new things, so, even if you do not see what your looking on this list,
        let's get in touch! It's always a pleasure for me to learn new abilities!
      </p>
      {
        logos.map(({ image, name }) => (
          <div className="skill-card">
            <img src={ image } alt={ name} />
            <h2>{ name }</h2>
          </div>
        ))
      }
    </div>
  )
}

export default Skills;