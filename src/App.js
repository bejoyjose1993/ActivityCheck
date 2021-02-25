
import './App.css';
import React, {Component} from 'react';
import TodosList from './Components/TodosList'
import HeaderLayout from './Components/Layout/HeaderLayout'
import AddToDo from './Components/AddToDo'
import About from './Components/Pages/About'
import { v4 as uuidv4 } from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom'
class App extends Component{
  state= {
    todos: [
        {
            id: uuidv4(),
            title: 'Create A Componant',
            completed: false
        },
        {
            id: uuidv4(),
            title: 'Import it in App.js',
            completed: false
        },
        {
            id: uuidv4(),
            title: 'App.js will be rendered in index.js',
            completed: false
        }
    ]
}

  deleteTask = (id) => {
    this.setState({todos : [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  taskComplete = (id) => {
    console.log(id)
    this.setState({todos : this.state.todos.map((todo) =>{
      if(todo.id === id){
        todo.completed = ! todo.completed
      }
      return todo;
    }  
    )});
    this.state.completed = !this.state.completed;
      // As we are not using state managers, to change a value of parent state we have to climb the lader
  }
  onSubmit = (title) =>{
    const newToDo = {
      id : uuidv4(),
      title,
      completed : false,
    }
    this.setState({todos : [...this.state.todos, newToDo]})
  }
  render(){
    //console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className= "container">
            <HeaderLayout/>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddToDo onSubmit = {this.onSubmit}/>
                <TodosList todos={this.state.todos} taskComplete = {this.taskComplete} deleteTask = {this.deleteTask}/>
              </React.Fragment>
            )}/>  
            <Route path="/about" component={About}/>        
          </div>       
        </div>
      </Router>
    );
  }
}

export default App;
