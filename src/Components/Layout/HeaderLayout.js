import React from 'react';
import { Link } from 'react-router-dom'
function HeaderLayout(){
    return(
        <header style={hearderStyle}>
            <h1> To Do List</h1>
            <Link to="/" style={linkStyle}>Home</Link> | <Link to="/about" style={linkStyle}>About</Link>
        </header> 
    )
}
const hearderStyle = {
    background : '#333',
    color:'#fff',
    textAlign:'center',
    padding: '10px'
}
const linkStyle={
    color:"#fff",
    textDecoration: "none"
}
export default HeaderLayout;