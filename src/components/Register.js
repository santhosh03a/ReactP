import React from 'react';
import axios from 'axios';
import {
    Link
  } from "react-router-dom";
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
            <div class="container">
            <div class="row justify-content-center">
                                <div class="col-md-8">
                                    <div class="card">
                                        <div class="card-header">Register</div>
                                        <div class="card-body">
            
                                            <form onSubmit={this.handleSubmit}>
            
                                                <div class="form-group">
                                                    <label for="name" class="cols-sm-2 control-label">Your FirstName</label>
                                                    <div class="cols-sm-10">
                                                        <div class="input-group">
                                                            <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                                                            <input type="text" class="form-control" name="firstname" value={firstname} onChange={this.handleChange} placeholder="Enter your FirstName" />
                                                        </div>
                                                   </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="name" class="cols-sm-2 control-label">Your LastName</label>
                                                    <div class="cols-sm-10">
                                                        <div class="input-group">
                                                            <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                                                            <input type="text" class="form-control" name="lastname" value={lastname} onChange={this.handleChange} placeholder="Enter your LastName" />
                                                        </div>
                                                   </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="email" class="cols-sm-2 control-label">Your Email</label>
                                                    <div class="cols-sm-10">
                                                        <div class="input-group">
                                                            <span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
                                                            <input type="text" class="form-control" name="email"  value ={email} onChange={this.handleChange} placeholder="Enter your Email" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="username" class="cols-sm-2 control-label">Mobile Number</label>
                                                    <div class="cols-sm-10">
                                                        <div class="input-group">
                                                            <span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
                                                            <input type="text" class="form-control" name="mobile" value={mobile} onChange={this.handleChange} placeholder="Enter your Mobile number" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="password" class="cols-sm-2 control-label">Password</label>
                                                    <div class="cols-sm-10">
                                                        <div class="input-group">
                                                            <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                                            <input type="password" class="form-control" name="pass" value={pass} onChange={this.handleChange} placeholder="Enter your Password" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="confirm" class="cols-sm-2 control-label">Confirm Password</label>
                                                    <div class="cols-sm-10">
                                                        <div class="input-group">
                                                            <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                                            <input type="password" class="form-control" placeholder="Confirm your Password" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group ">
                                                   <button type="submit" className='btn btn-dark'>Register</button>
                                                </div>
                                            </form>
                                        </div>
            
                                    </div>
                                </div>
                            </div>
            </div>
         );
    }
}
 
export default Register;