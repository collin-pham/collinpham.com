import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Art, Home } from './views';

import { FlipCard } from './components';

export default class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route exact path="/" component={Home} />
          <Route exact path="/art" component={Art} />
        </>
      </Router>
    );
  }
}
