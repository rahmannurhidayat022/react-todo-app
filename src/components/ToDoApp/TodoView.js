import { nanoid } from 'nanoid';
import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function TodoView() {
	const [todos, setTodos] = React.useState({
		data: [],
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
					id: nanoid(),
					text: todos.text,
					complete: false,
				},
			],
		});
		e.target.reset();
	};

	const handleDeleteTodos = (todoId) => {
		const confirm = window.confirm('Are you sure ?');

		if (confirm) {
			const updateData = todos.data.filter((todo) => todo.id !== todoId);

			setTodos({ data: updateData });
		}
	};

	const handleToggleChecked = (todoId) => {
		const todo = todos.data.find((todo) => todo.id === todoId);
		todo.complete = !todo.complete;
		setTodos({ data: [...todos.data] });
	};

	return (
		<section className="d-flex flex-column justify-content-center align-items-center my-5">
			<TodoList
				todos={todos.data}
				handleDeleteTodos={handleDeleteTodos}
				handleToggleChecked={handleToggleChecked}
			/>
			<TodoForm
				handleOnChange={handleOnChange}
				handleAddTodos={handleAddTodos}
			/>
		</section>
	);
}
