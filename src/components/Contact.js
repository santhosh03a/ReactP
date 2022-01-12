import React, { Component } from 'react';
// import './About.css';
import c from '../images/c1.jpg';
import './con.css'
function Conatct(){
    return(
        <div>
             <div class="wrapper">
             <div class="background-container">
             <div class="bg-1"></div>
             <div class="bg-2"></div>
</div>
<div class="about-container">
    
    <div class="text-container">
        <h1>Contact Us</h1>
        <div class="inner-container1">
<form>
<div className='text'>
<label htmlFor="firstname">Drop a Message</label>
<span></span>
<input type="text"required />
</div>
</form>
</div>
        <a href="">Send Message</a>
    </div>
    <div class="image-container">
        <img src={c}></img>     
    </div>

    
</div>
</div>
        </div>
    )
}
export default Conatct;