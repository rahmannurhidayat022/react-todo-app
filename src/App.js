import TodoView from 'components/ToDoApp/TodoView';
import Home from 'pages/Home';
import React from 'react';
import './styles/scss/style.scss';

export default function App() {
	return (
		<>
			<Home />
			<TodoView />
		</>
	);
}
