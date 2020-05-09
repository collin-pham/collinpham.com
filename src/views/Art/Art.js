import React, { Component, useState } from 'react';
import { DonationBox } from '../../components';
import { Link } from 'react-router-dom';
import './Art.css';

export class Art extends Component {
	render() {
		return(
			<div className="Art">
				<ArtBoard/>
				<DonationBox/>
			</div>
		);
	}
}

export const ArtBoard = () => {
	const [showDonationBox, setShowDonationBox] = useState(false);

	return (
		<div className="Art-board-container" style={{top: showDonationBox ? 'calc(-100% + 64px)' : '0px'}}>
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
			<div className="Art-donation" onClick={() => {setShowDonationBox(!showDonationBox)}}>
				{showDonationBox ? 'x' : '$'}
			</div>
		</div>
	);
};
