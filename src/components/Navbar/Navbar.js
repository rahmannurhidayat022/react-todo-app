/* eslint-disable jsx-a11y/anchor-is-valid */
import Close from 'assets/icons/close.svg';
import Hamburger from 'assets/icons/menu.svg';
import React from 'react';
import IconText from './IconText';

export default function Navbar() {
	return (
		<>
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
			<div className='sidebar d-flex flex-column justify-content-center px-5 text-white'>
				<blockquote className='blockquote'>
					<p>
						" Hi, I'm Rahman Nurhidayat, a web developer. Now I learn ReactJs. "
					</p>
					<p style={{ fontWeight: '300' }}>~ I Loved Javascript</p>
				</blockquote>
				<address>
					<p>Lets connect with me in : </p>
					<ul className='nav'>
						<li className='nav-item border'>
							<a
								className='nav-link text-white'
								href='#'
								style={{ backgroundColor: '#333' }}>
								Github
							</a>
						</li>
						<li className='nav-item border'>
							<a
								className='nav-link text-white'
								href='#'
								style={{ backgroundColor: '#4267B2' }}>
								Facebook
							</a>
						</li>
						<li className='nav-item border'>
							<a
								className='nav-link text-white'
								href='#'
								style={{ backgroundColor: '#0077b5' }}>
								Linked
							</a>
						</li>
					</ul>
				</address>
				<div className='ic-close'>
					<img src={Close} alt='closing sidebar' />
				</div>
			</div>
		</>
	);
}
