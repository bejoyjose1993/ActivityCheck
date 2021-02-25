import React, {Component} from 'react'; 
import PropTypes from 'prop-types';
class TodoElement extends Component{
    // getStyle(){
    //     if(this.props.todo.completed){
    //         return{
    //             textDecoration: 'line-through'
    //         }
    //     }else{
    //         return{
    //             textDecoration: 'none'
    //         }
    //     }
    // }

    getStyle = () => {
        return(
            {
                backgroundColor: '#f4f4f4',
                padding: 2,
                boderBottom: '1px #ccc dotted',
                textDecoration: this.props.todo.completed ? 
                'line-through' : 'none'
            }
        )
    }
    // taskComplete(e){
    //     console.log(this.props) 
    // }
    // taskComplete = (e) => {
    //      // As we are not using state managers, to change a value of parent state we have to climb the lader
    // }
    render(){
        const {id,title} = this.props.todo
        return(
           <div style={this.getStyle()}>
                <p>
                    {/* <input type="checkbox" onChange = {this.taskComplete.bind(this)}/> {' '} */} 
                    <input type="checkbox" onChange = {this.props.taskComplete.bind(this,id)}/>{' '}
                    {title}
                    <button style={btnStyle} onClick = {this.props.deleteTask.bind(this,id)}>x</button>
                </p>
           </div>

        )
    }
}

const btnStyle = {
    background : '#ff0000',
    color: '#fff',
    boder : 'none',
    padding : '2px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float:'right' 
}
TodoElement.propTypes = {
    todo : PropTypes.object.isRequired
}

// const itemStyle = {
//     backgroundColor: '#f4f4f4',
//     padding: 2
// }
export default TodoElement