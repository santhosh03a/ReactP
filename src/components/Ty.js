import React, { Component } from 'react';
import ReactPlayer from "react-player";
import ty from '../images/ty.jpg';
import'./ty.css'
import {
    Link,Redirect
  } from "react-router-dom";
function Ty(){
    return(
        <div>
        <div class="wrapper">
        <div class="background-container">
        <div class="bg-1"></div>
        <div class="bg-2"></div>
</div>
<div class="about-containerr">

<div class="image-containerr">
   <img src={ty}></img>
   
</div>

<div class="text-container">
   <Link to="/"><a>Continue Shopping</a></Link>
</div>

</div>
</div>
   </div>
    );
}
export default Ty;