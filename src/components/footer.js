import React from 'react';
import { FaFacebook,FaInstagram,FaLinkedin,FaTwitter,FaGithub, FaYoutube } from 'react-icons/fa';
class Footer extends React.Component {
    render() { 
        return ( 
            <footer class="bg-dark text-center text-white">

  <div class="container p-4 pb-0">

    <section class="mb-4">
 
  
        <div class="btn btn-outline-light btn-floating m-1" ><FaFacebook></FaFacebook></div>
        <div class="btn btn-outline-light btn-floating m-1" ><FaInstagram></FaInstagram></div>
        <div class="btn btn-outline-light btn-floating m-1" ><FaLinkedin></FaLinkedin></div>
        <div class="btn btn-outline-light btn-floating m-1" ><FaTwitter></FaTwitter></div>
        <div class="btn btn-outline-light btn-floating m-1" ><FaGithub></FaGithub></div>
        <div class="btn btn-outline-light btn-floating m-1" ><FaYoutube></FaYoutube></div>


    </section>

  </div>

  <div class="text-center p-3 ">
    © 2022 Copyright:<br></br>
    <a class="text-white">Oneplus Store</a>
  </div>

</footer>
         );
    }
}
 
export default Footer;