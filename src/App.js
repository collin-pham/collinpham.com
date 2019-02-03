import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Art, Home, LightCycle } from './views';

export default class App extends Component {
	render() {
		return (
			<Router>
				<>
					<Route exact path="/" component={Home} />
					<Route exact path="/art" component={Art} />
					<Route exact path="/art/light-cycle" component={LightCycle} />
				</>
			</Router>
		);
	}
}
