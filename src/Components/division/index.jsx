import React from 'react';
import './styles.css';

function Division({ children }) {
  return (
    <div className="division">
      <h5>{ children }</h5>
      <div />
    </div>
  );
}

export default Division;
