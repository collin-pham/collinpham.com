import React, { Component } from 'react';
import './App.css';

import { FlipCard } from './components';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      turn: 0
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll = (event) => {
    const turn = ((document.documentElement.scrollTop || document.scrollingElement.scrollTop) / document.documentElement.clientHeight) * .5
    this.setState({
      turn: turn > 0.5 ? 0.5 : turn
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-position">
          <div className="FlipCard-wrapper">
            <div className="FlipCard-container">
              <FlipCard turnY={this.state.turn} turnZ={this.state.turn}>
                <div className="FlipCard-front">
                  Collin Pham
                </div>
              </FlipCard>

              <FlipCard turnY={this.state.turn + .5} turnZ={-(this.state.turn + .5)}>
                  <div className="FlipCard-back">
                    <div className="FlipCard-header">
                      <div className="FlipCard-title">
                        <b>Creator</b>
                      </div>
                      <div className="FlipCard-location">
                        San Francisco, CA
                      </div>
                    </div>
                    <div className="FlipCard-body">
                      <Contact/>
                      <Companies/>
                    </div>
                  </div>
              </FlipCard>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Contact = () => (
  <div className="FlipCard-contact">
    <span className="FlipCard-header-item"> contact me </span>
    <span className="FlipCard-item">
      <a href="http://collinpham.com" rel="noopener noreferrer">
        collinpham.com
      </a>
    </span>
    <span className="FlipCard-item">
      <a href="https://github.com/collin-pham" target="_blank" rel="noopener noreferrer">
        github.com/collin-pham
      </a>
    </span>
    <span className="FlipCard-item">
      <a href="https://twitter.com/collinjpham" target="_blank" rel="noopener noreferrer">
        twitter.com/collinjpham
      </a>
    </span>
    <span className="FlipCard-item">
      <a href="mailto:me@collinpham.com" rel="noopener noreferrer">
        me@collinpham.com
      </a>
    </span>
  </div>
);

const Companies = () => (
  <div className="FlipCard-companies">
    <span className="FlipCard-header-item"> things i've built </span>
    <span className="FlipCard-item">
      <a href="https://doyen.app" target="_blank" rel="noopener noreferrer">
        doyen.app
      </a>
    </span>
    <span className="FlipCard-item">
      <a href="https://getspaceport.com" target="_blank" rel="noopener noreferrer">
        getspaceport.com
      </a>
    </span>
    <span className="FlipCard-item">
      <a href="https://localstudentworkers.com" target="_blank" rel="noopener noreferrer">
        localstudentworkers.com
      </a>
    </span>
    <span className="FlipCard-item">
      <a href="https://sanfrancigy.com" target="_blank" rel="noopener noreferrer">
        sanfrancigy.com
      </a>
    </span>
  </div>
)

export default App;
