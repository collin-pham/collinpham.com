import React from 'react';
import './FlipCard.css';

export const FlipCard = (props) => (
	<div className='FlipCard' style={{
		'msTransform': `-ms-rotateY(${props.turnY}turn) -ms-rotateZ(${props.turnZ}turn)`,
		'WebkitTransform': `-webkit-rotateY(${props.turnY}turn) -webkit-rotateZ(${props.turnZ}turn)`,
		'MozTransform': `-moz-rotateY(${props.turnY}turn) -moz-rotateZ(${props.turnZ}turn)`,
		'OTransform': `-o-rotateY(${props.turnY}turn) -o-rotateZ(${props.turnZ}turn)`,
		'transform': `rotateY(${props.turnY}turn) rotateZ(${props.turnZ}turn)`,
	}}>
		{props.children}
	</div>
);
