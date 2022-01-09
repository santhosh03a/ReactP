import React from "react";
import './login.css';
import {
    Link
  } from "react-router-dom";
function Login(){
    return(
        <div>
                <div class="container">
        <div class="card card-container1">

            <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile"/>
            <p id="profile-name" class="profile-name-card"></p>
            <form class="form-signin">
                <span id="reauth-email" class="reauth-email"></span>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address"  />
                <input type="password" id="inputPassword" class="form-control" placeholder="Password"  />
                <div id="remember" class="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
                <Link to="/Register">
                <button >Register</button>
                </Link>
            </form>
            <a href="#" class="forgot-password">
                Forgot the password?
            </a>
        </div>
    </div>

    </div>
         
    );
}
export default Login;