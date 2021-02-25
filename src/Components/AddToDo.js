
import React, {Component} from 'react';


class AddToDo extends Component{
    state = {
        title : ''
    }
    onChange = (e) => this.setState({
        [e.target.name] : e.target.value
    });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.title);
        this.state.title = '';
    }

    render(){
        return (
                <form onSubmit ={this.onSubmit} style = {{display: 'flex'}}>
                    <input 
                        type='text'
                        placeholder='Add ToDo ...'
                        name='title'
                        style={{flex :'10', padding : '5px'}}
                        value = {this.state.title}
                        onChange={this.onChange}
                    />
                <input
                    type = 'submit'
                    value = 'submit'
                    className = 'btn'
                    style = {{flex :'1'}}
                />    
                </form>
                

        )
    }
}


export default AddToDo;