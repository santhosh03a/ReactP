import React from "react";
import './login.css';
import {
    Link
  } from "react-router-dom";
  import axios from "axios";
class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass:''
        }
    }
    handleChange=event=>{
        this.setState({ [event.target.name]: event.target.value })
        
    }
    handleSubmit=event=>{
        axios.post('http://localhost:8080/login', this.state)
            .then(res => {
                console.log("login successfull")
            })
            .catch(err => {
                console.log(err)
            })
    }
    render(){
        const{email,pass}=this.state
    return(
    //     <div>
    //             <div class="container">
    //     <div class="card card-container1">

    //         <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile"/>
    //         <p id="profile-name" class="profile-name-card"></p>
    //         <form class="form-signin" onSubmit={this.handleSubmit}>
    //             <span id="reauth-email" class="reauth-email"></span>
    //             <input type="email" id="inputEmail" name="email" value={email} class="form-control" onChange={this.handleChange} placeholder="Email address"  />
    //             <input type="password" id="inputPassword" class="form-control" name="pass" value={pass} onChange={this.handleChange} placeholder="Password"  />
    //             <div id="remember" class="checkbox">
    //                 <label>
    //                     <input type="checkbox" value="remember-me" /> Remember me
    //                 </label>
    //             </div>
    //             <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
    //             <Link to="/Register">
    //             <button >Register</button>
    //             </Link>
    //         </form>
    //         <a href="#" class="forgot-password">
    //             Forgot the password?
    //         </a>
    //     </div>
    // </div>

    // </div>
    <div>
        <form  onSubmit={this.handleSubmit}>
        <input type="email" id="inputEmail" name="email" value={email} onChange={this.handleChange} placeholder="Email address"  />
        <input type="password" id="inputPassword"  name="pass" value={pass} onChange={this.handleChange} placeholder="Password"  />
        <button type="submit">Sign in</button>
        </form>
    </div>
         
    );
    }
}
export default Login;