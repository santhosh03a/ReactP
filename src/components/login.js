import React from "react";
import './login.css';
import {
    Link,Redirect
  } from "react-router-dom";
  import axios from "axios";
  import { useHistory } from 'react-router-dom';

class Login extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass:'',
            msg:''
        }
    }  

    handleSubmit=event=>{
        
        axios.post('http://localhost:8080/login', this.state)
            .then(res => {
                console.log("login successfull")
            })
            .catch(err => {
                console.log("invalid credentials")
                this.setState({msg:"invalid username or password"})
            })
    }
    handleChange=event=>{
        this.setState({ [event.target.name]: event.target.value })
        
    }
    render(){

        const{email,pass}=this.state

        
    return(
    <div>
  
        <input type="email" id="inputEmail" name="email" value={email} onChange={this.handleChange} placeholder="Email address"  />
        <input type="password" id="inputPassword"  name="pass" value={pass} onChange={this.handleChange} placeholder="Password"  />
        <button type="submit" onClick={this.handleSubmit}>Sign in</button>
        <p>{this.state.msg}</p>
    </div>
         
    );
    }
}
export default Login;