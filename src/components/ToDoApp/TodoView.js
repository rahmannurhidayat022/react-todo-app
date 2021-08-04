import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function TodoView() {
	const [todos, setTodos] = React.useState({
		data: [],
		id: 1,
		text: '',
		complete: false,
	});

	const handleOnChange = (e) => {
		setTodos({
			...todos,
			id: Math.random(),
			text: e.target.value,
			complete: false,
		});
	};

	const handleAddTodos = (e) => {
		e.preventDefault();
		setTodos({
			data: [
				...todos.data,
				{
					id: todos.id,
					text: todos.text,
					complete: todos.complete,
				},
			],
		});
		e.target.reset();
	};

	return (
		<section className='d-flex flex-column justify-content-center align-items-center my-5'>
			<TodoList todos={todos.data} />
			<TodoForm
				handleOnChange={handleOnChange}
				handleAddTodos={handleAddTodos}
			/>
		</section>
	);
}
