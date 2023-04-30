import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Art, Home, LightCycle, Reel, Writings } from './views';
import { Advice, NewThings } from './views/Writings';

export default class App extends Component {
	render() {
		return (
			<Router>
				<>
					<Route exact path="/" component={Home} />
					{/* Art */}
					<Route exact path="/art" component={Art} />
					<Route exact path="/art/light-cycle" component={LightCycle} />
					<Route exact path="/art/reel" component={Reel} />

					{/* Writings */}
					<Route exact path="/writings" component={Writings} />
					<Route exact path="/writings/advice" component={Advice} />
					<Route exact path="/writings/new-things" component={NewThings} />
				</>
			</Router>
		);
	}
}
