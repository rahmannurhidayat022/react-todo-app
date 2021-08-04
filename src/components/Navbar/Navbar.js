import Hamburger from 'assets/icons/menu.svg';
import React from 'react';
import IconText from './IconText';

export default function Navbar() {
	return (
		<nav className='navbar navbar-light'>
			<div className='container'>
				<div className='toggler'>
					<img
						style={{ cursor: 'pointer' }}
						className='img-fluid'
						src={Hamburger}
						alt='hamburger-icon'
					/>
				</div>
				<IconText />
			</div>
		</nav>
	);
}
