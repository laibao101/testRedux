import React from 'react';
import Footer from '../footer';
import AddTodo from '../todo';
import VisibleTodoList from '../../container/visibleTodoList';

const App = ()=>{
	<div>
		<AddTodo></AddTodo>
		<VisibleTodoList></VisibleTodoList>
		<Footer></Footer>
	</div>
}

export default App;
