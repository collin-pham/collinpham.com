import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Art.css';

export class Art extends Component {
	render() {
		return(
			<div className="Art">
				<ArtBoard/>
			</div>
		);
	}
}

export const ArtBoard = () => (
	<div className="Art-board-container">
		<div className="Art-board">
			<div className="Art-title">
				<h2>
					I am creating art that uses the browser as a medium.
				</h2>
			</div>
			<div className="Art-links">
				<ul>
					<li>
						<Link to="/art/light-cycle" className="Art-link">
							light cycle
						</Link>
					</li>
					<li>
						<Link to="/art/reel" className="Art-link">
							reel
						</Link>
					</li>
					<li>
						<span className="Art-link-disabled">
							more to come...
						</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
);
