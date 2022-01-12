import React from 'react';
import axios from 'axios';
import './reg.css';
import {
    Link
  } from "react-router-dom";
  import { FaUserCircle,FaEnvelope,FaKey,FaUser} from 'react-icons/fa';
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname:'',
            email: '',
            mobile:'',
            pass:''
        }
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit = event => {
        event.preventDefault()
        axios.post('http://localhost:8080/saveuser', this.state)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        console.log(this.state);
    }
    render() { 
        const {firstname,lastname,email,mobile,pass } = this.state
        return ( 
            <div class="wrapperrr">
            <div class="text-center mt-4 name"> Sign In </div>
    <form class="p-3 mt-3" onSubmit={this.handleSubmit}>
    <div class="form-field d-flex align-items-center"><FaUserCircle></FaUserCircle>
    <span class="fas fa-user"></span> 
    <input type="text" name="firstname" value={firstname} onChange={this.handleChange}  required placeholder="Enter your FirstName" /></div>
    
    <div class="form-field d-flex align-items-center"><FaUserCircle></FaUserCircle>
    <span class="fas fa-user"></span> 
    <input type="text" name="lastname" value={lastname} onChange={this.handleChange}  required placeholder="Enter your LastName" /></div>

    <div class="form-field d-flex align-items-center"><FaEnvelope></FaEnvelope>
    <span class="fas fa-mail"></span> 
    <input type="email" name="email"  value ={email} onChange={this.handleChange}  required placeholder="Enter your Email"/> </div>
    
    <div class="form-field d-flex align-items-center"><FaUser></FaUser>
    <span class="fas fa-user"></span> 
    <input type="text" name="mobile" value={mobile} onChange={this.handleChange}  required placeholder="Enter your Mobile"/></div>
    
    <div class="form-field d-flex align-items-center"><FaKey></FaKey>
    <span class="fas fa-user"></span> 
    <input type="password" name="pass" value={pass} onChange={this.handleChange} required placeholder="Enter your Password"/></div>
    
    <div class="form-field d-flex align-items-center"> <FaKey></FaKey>
    <span class="fas fa-key"></span> 
    <input type="password" name="confirm" id="confirm" required  placeholder=" Confirm Password" /> </div> 
    
       <button class="btn mt-3"  type="submit">Register</button>
    </form>
    <div class="text-center fs-6"> <Link to="Login"><a>Log in</a> </Link> </div>
    
    </div>
         );
    }
}
 
export default Register;