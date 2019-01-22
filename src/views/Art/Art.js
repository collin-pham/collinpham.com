import React, { Component } from 'react';
import './Art.css';

const COLORS = [
  '#fffb8e',
  '#ffd965',
  '#ffb742',
  '#ff9023',
  '#ff6206',
  '#fe0004',
  '#d20037',
  '#a50646',
  '#791045',
  '#501239',
  '#2a1024',
  '#000000',
  '#000000',
  '#2a1024',
  '#501239',
  '#791045',
  '#a50646',
  '#d20037',
  '#fe0004',
  '#ff6206',
  '#ff9023',
  '#ffb742',
  '#ffd965',
  '#fffb8e',
];

export class Art extends Component {
  date = new Date();

  render() {
    return(
      <div className="Art" style={{ backgroundColor: `${COLORS[this.date.getHours()]}` }}>
        <div className="Art-title">
          <h1>
            I am exploring art projects that use the browser as a medium.
          </h1>
          <h3>
            When they are ready, I'll put them here.
          </h3>
        </div>
      </div>
    )
  }
}
