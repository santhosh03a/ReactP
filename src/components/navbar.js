import React from "react";
import {
  Link
} from "react-router-dom";

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
        <li class="nav-item">
          <Link to={'/'} class="link">home</Link>
        </li>
        <li class="nav-item">
          {/* <a class ="nav-link" Link to="/Login">Login</a> */}
          
          <Link to={'/Login'} class="link">login</Link>
          
        </li>
        <li class="nav-item">
        <Link to={'/Cart'} class="link">Cart</Link>
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
          

//  <Router>
// <div>
//       <ul>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/Login">login</Link>
//       </li>
//     </ul>
//     <hr />
    // <Switch>
    //   <Route exact path='/' component={Home}/>
    //   <Route exact path='/Login' component={Login} />
    // </Switch>
// </div>
// </Router> 
    );
}
export default Navbar;