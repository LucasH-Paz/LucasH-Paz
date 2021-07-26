import React, { useState } from 'react';
import Carousel from '../Carousel';
import './styles.css';

function Works() {
  const [filter, setFilter] = useState('All');
  return(
    <div id="works">
      <div>
        <button onClick={ }>All</button>
      </div>
      <Carousel pictures={[]} current="" />
    </div>
  )
}

export default Works;
