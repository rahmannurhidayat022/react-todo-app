import React from 'react';

export default function TodoList() {
	return (
		<ul className='nav-list'>
			<li className='list half-radius d-flex align-items-center'>
				<div className='ic-delete px-3 border-end'>
					<span role='button' className='del-check'>
						x
					</span>
				</div>
				<div className='content px-2'>Create code for tommorow</div>
				<div className='check-circle'>
					<form className='form-check'>
						<input
							className='form-check-input rounded-circle'
							type='checkbox'
						/>
					</form>
				</div>
			</li>
			<li className='list half-radius d-flex align-items-center'>
				<div className='ic-delete px-3 border-end'>
					<span role='button' className='del-check'>
						x
					</span>
				</div>
				<div className='content px-2'>Download offline youtube videos</div>
				<div className='check-circle'>
					<form className='form-check'>
						<input
							className='form-check-input rounded-circle'
							type='checkbox'
						/>
					</form>
				</div>
			</li>
		</ul>
	);
}
