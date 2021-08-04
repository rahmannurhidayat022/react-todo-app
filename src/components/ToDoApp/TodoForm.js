import React from 'react';
import TodoButton from './TodoButton';

export default function TodoForm() {
	return (
		<ul className='nav-list mt-4'>
			<li className='list full-radius mb-0'>
				<form className='d-flex'>
					<input
						name='text'
						size='20'
						className='ms-4 form-control border-0'
						type='text'
						required
					/>
					<TodoButton
						type='submit'
						className='btn-primary'
						textContent='Add list'
					/>
				</form>
			</li>
		</ul>
	);
}
