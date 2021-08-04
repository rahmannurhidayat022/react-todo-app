import propTypes from 'prop-types';
import React from 'react';

export default function TodoButton(props) {
	const onClick = () => {
		if (props.onClick) props.onClick();
	};

	return (
		<button
			type={props.type}
			className={`btn button-primary ${props.className}`}
			onClick={onClick}>
			{props.textContent}
		</button>
	);
}

TodoButton.prototype = {
	onClick: propTypes.func,
	textContent: propTypes.string,
	className: propTypes.string,
	type: propTypes.string,
};
