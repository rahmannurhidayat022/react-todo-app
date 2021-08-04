import React from 'react';

export default function TodoList({ todos, handleDeleteTodos }) {
	if (!todos.length > 0)
		return <h2 className='h4 text-secondary'>No data yet, please enter</h2>;

	const renderData = todos.map((todo) => {
		return (
			<li key={todo.id} className='list half-radius d-flex align-items-center'>
				<div className='ic-delete px-3 border-end'>
					<span
						onClick={() => handleDeleteTodos(todo.id)}
						role='button'
						className='del-check'>
						x
					</span>
				</div>
				<div className='content px-2'>{todo.text}</div>
				<div className='check-circle'>
					<form className='form-check'>
						<input
							className='form-check-input rounded-circle'
							type='checkbox'
						/>
					</form>
				</div>
			</li>
		);
	});

	return <ul className='nav-list'>{renderData}</ul>;
}
