/* eslint-disable jsx-a11y/anchor-is-valid */
import Close from 'assets/icons/close.svg';
import Hamburger from 'assets/icons/menu.svg';
import PhotoProfile from 'assets/images/profile.jpg';
import React from 'react';
import IconText from './IconText';

export default function Navbar() {
	const [toggler, setState] = React.useState(false);

	const handleToggler = () => {
		setState(!toggler);
	};

	return (
		<>
			<nav className='navbar navbar-light'>
				<div className='container'>
					<div className='toggler' onClick={handleToggler}>
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
			<div
				className={`sidebar d-flex flex-column justify-content-center px-5 text-white ${
					toggler === true ? ' open' : ''
				}`}>
				<div className='profile my-3'>
					<img className='img-fluid' src={PhotoProfile} alt='author' />
				</div>
				<blockquote className='blockquote text-center mb-5'>
					<p>
						" Hi, I'm Rahman Nurhidayat, a web developer. Now I learn ReactJs. "
					</p>
				</blockquote>
				<address className='text-center'>
					<p>Lets connect with me</p>
					<ul className='nav justify-content-center'>
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
				<div className='ic-close' onClick={handleToggler}>
					<img
						style={{ cursor: 'pointer' }}
						src={Close}
						alt='closing sidebar'
					/>
				</div>
			</div>
		</>
	);
}
