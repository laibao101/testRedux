import {connect} from 'react-redux';
import toggleTodo from '../../actions';
import TodoList from '../../components/todoList';


const getVisibleTodos = (todo,filter) =>{
	switch(filter){
		case 'SHOW_ALL':
			return todo;
		case 'SHOW_ACTIVE':
			return todo.filter(t=>!t.completed);
		case 'SHOW_COMPLETED':
			return todo.filter(t=>t.completed);
	}
}


const mapStateToProps = (state)=>{
	return {
		todos:getVisibleTodos(state.todos,state.visibilityFilter)
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		onTodoClick:(id)=>{
			dispatch(toggleTodo(id))
		}
	}
}


const VisibleTodoList = connect(mapStateToProps,mapDispatchToProps)(TodoList);

export default VisibleTodoList;
