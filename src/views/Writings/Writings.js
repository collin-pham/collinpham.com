import React, { Component } from 'react';
import './Writings.css';
import { Link } from 'react-router-dom';

export class Writings extends Component {
	render() {
		return(
			<div className="Writings">
                <div>
                    <h2>Thoughts I've written down:</h2>
                </div>
                <div className="Writings-list">
                    <div>
                        <Link to='/writings/long-term'>
                            Long-Term
                        </Link>
                    </div>
                    <div>
                        <Link to='/writings/advice'>
                            How To Listen To Advice (Like This)
                        </Link>
                    </div>
                    <div>
                        <Link to='/writings/new-things'>
                            Doing New Things
                        </Link>
                    </div>
                </div>
			</div>
		);
	}
}