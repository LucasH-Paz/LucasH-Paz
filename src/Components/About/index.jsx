import React from 'react';
import './styles.css';

import user from '../../images/userimg.jpg';

function About() {
  return(
    <div id="about">
      <div className="content">
        <h1 className="title is-1">Hi There!</h1>
        <h2 className="subtitle is-3">A little bit about me...</h2>
        <p>
          I'm a web developement student, completely in love with doing technology. I'm studing
          to become a full-stack web developer; doing resposives, scalable, legible and full of 
          smart solutions pages, I'm completely in with programming. I studied engineering before
          getting started in coding, but the constant challenges and the infinite possibilities
          that comes with coding facsinated me.
        </p>
        <p>
          As a person, my hobbies are drawing, listening to songs, go walking with my pretty dog
          and explore the town. I love arctechture and design. You read more of me following me on
          Instagram, LinkedIn and GitHub. The links are at the bottom of this page.
        </p>
        <button type="button" className="button is-primary">
          Checkout Curriculum
        </button>
      </div>
      <img src={ user } alt="author" />
    </div>
  )
}

export default About;