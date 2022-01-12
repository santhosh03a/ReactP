import React, { Component } from 'react';
import './About.css';
import bg from '../images/bg.jpg';
function About(){
    return(
        <div>
             <div class="wrapper">
             <div class="background-container">
             <div class="bg-1"></div>
             <div class="bg-2"></div>
</div>
<div class="about-container">
    
    <div class="image-container">
        <img src={bg}></img>
        
    </div>

    <div class="text-container">
        <h1>About us</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi porro rerum cupiditate expedita <br></br>distinctio nisi nulla ipsum libero molestiae minima Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,ipsum libero molestiae</p>
        <a href="">Read More</a>
    </div>
    
</div>
</div>
        </div>
    )
}
export default About;