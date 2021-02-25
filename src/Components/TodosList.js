
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TodoElement from './TodoElement'
class TodosList extends Component{

    render(){
        //console.log(this.props.todos)
        return this.props.todos.map((todo) => (
                <TodoElement key ={todo.id} todo ={todo} taskComplete = {this.props.taskComplete} deleteTask = {this.props.deleteTask}/>
            )
            );
    }
}
TodosList.propTypes = {
    todos : PropTypes.array.isRequired
}

export default TodosList;
