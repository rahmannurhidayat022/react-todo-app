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
			text: e.target.value,
		});
	};

	const handleAddTodos = (e) => {
		e.preventDefault();
		setTodos({
			data: [
				...todos.data,
				{
					id: todos.data.length + 1,
					text: todos.text,
					complete: false,
				},
			],
		});
		e.target.reset();
	};

	const handleDeleteTodos = (todoId) => {
		const confirm = window.confirm('This data will delete on your storage ?');

		if (confirm) {
			const updateData = todos.data.filter((todo) => todo.id !== todoId);

			setTodos({ data: updateData });
		}
	};

	return (
		<section className='d-flex flex-column justify-content-center align-items-center my-5'>
			<TodoList todos={todos.data} handleDeleteTodos={handleDeleteTodos} />
			<TodoForm
				handleOnChange={handleOnChange}
				handleAddTodos={handleAddTodos}
			/>
		</section>
	);
}
