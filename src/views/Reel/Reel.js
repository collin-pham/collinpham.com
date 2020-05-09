import React from 'react';
import './Reel.css';

export const Reel = () => {
	return (
		<div className='Reel'>
			<div onClick={() => window.location.reload() } className='Reel-refresh'>new photo &#x2192;</div>
		</div>
	);
};