import React from 'react';
import './FlipCard.css';

export const FlipCard = (props) => (
  <div className='FlipCard' style={{transform: `rotateY(${props.turnY}turn) rotateZ(${props.turnZ}turn)`}}>
    {props.children}
  </div>
);
