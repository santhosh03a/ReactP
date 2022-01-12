import React from "react";
import {
  Link
} from "react-router-dom";
import { FaHome,FaShoppingBasket,FaPhone} from 'react-icons/fa';

function Navbar(){
  // const{products}=data;
    return(
      <div>

      <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
<div class="container-fluid">
<a class="navbar-brand" href="#"><h3>Ecommerce</h3></a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
<ul class="navbar-nav me-auto mb-2 mb-lg-0">
  <li class="nav-item"><FaHome></FaHome>
    <Link to={'/'} class="link">Home</Link>
  </li>
  <li class="nav-item">
    <Link to={'/About'} class="link">About Us</Link>
  </li>
  <li class="nav-item">
    {/* <a class ="nav-link" Link to="/Login">Login</a> */}
    
    <Link to={'/Login'} class="link">Login</Link>
    
  </li>
  <li class="nav-item"><FaShoppingBasket></FaShoppingBasket>
  <Link to={'/Cart'} class="link">Cart</Link>
  </li>

  <li class="nav-item">
  <Link to={'/Contact'} class="link">Contact Us</Link><FaPhone></FaPhone>
  </li>

</ul>
<form class="d-flex">
  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
  <button class="btn btn-outline-success" type="submit">Search</button>
</form>

</div>
</div>
</nav>
</div>
          


    );
}
export default Navbar;