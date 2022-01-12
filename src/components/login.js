import React from "react";
import './login.css';
import {Link,Redirect} from "react-router-dom";
import { FaGoogle,FaEnvelope,FaKey} from 'react-icons/fa';
  import axios from "axios";
class Login extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass:'',
            msg:'',
            redirect:false
        }
    }  

    handleSubmit=event=>{
        event.preventDefault()
        axios.post('http://localhost:8080/login', this.state)
            .then(res => {
                console.log("login successfull")
                this.setState(
                    {redirect:true}
                )
                
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

    <div class="wrapperr">
        {this.state.redirect?(<Redirect push to="/" />):null}
<div class="text-center mt-4 name"> Log In </div>
<form class="p-3 mt-3">
<div class="form-field d-flex align-items-center"> <FaEnvelope></FaEnvelope>
<span class="far fa-user"></span> 

<input type="email" name="email" id="email" value={email} required placeholder="Enter your Email"onChange={this.handleChange}/> </div>

<div class="form-field d-flex align-items-center" > <FaKey></FaKey>


<input type="password" name="pass" id="password" required value={pass} onChange={this.handleChange} placeholder="Password" /> </div> 

   <button class="btn mt-3"  type="submit" onClick={this.handleSubmit}>Log in</button>
   <p>{this.state.msg}</p>
</form>
<div class="text-center fs-6"> <FaGoogle></FaGoogle> <Link to="Glogin"><a>Sign up with google</a> </Link> or <Link to="Register"><a>Sign up</a> </Link></div>

</div>
         
    );
    }
}
export default Login;