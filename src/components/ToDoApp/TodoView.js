import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function TodoView() {
	return (
		<section className='d-flex flex-column justify-content-center align-items-center my-5'>
			<TodoList />
			<TodoForm />
		</section>
	);
}
