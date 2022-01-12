import React,{ useState }  from "react";
import Product from "./Product";
import data from "./../data";
import ear from '../images/ear.jpg';
import pro from '../images/pro.jpg';
import wa from '../images/wa.jpg';
import earp from '../images/earp.jpg';
import './home.css'
class Home extends React.Component{
    render(){
    return(
        <div>
            <section id="slider">
            <input type="radio" name="slider" id="s1"/>
            <input type="radio" name="slider" id="s2"/>
        <input type="radio" name="slider" id="s3" checked/>
    <input type="radio" name="slider" id="s4"/>
    <input type="radio" name="slider" id="s5"/>
    <label for="s1" id="slide1">
    <img src={wa} height="100%" width="100%"/>
    </label>
    <label for="s2" id="slide2">
    <img src={pro} height="100%" width="100%"/>
    </label>
    <label for="s3" id="slide3">
    <img src={ear} height="100%" width="100%"/>
    </label>
    <label for="s4" id="slide4">
    <img src={earp} height="100%" width="100%"/>
    </label>
    {/* <label for="s5" id="silde5">
    <img src={watch} height="100%" width="100%"/>
    </label> */}
    </section>
        <h1 class="text-center mt-3">Products</h1>
        <section class="container">
            <div class="row">
                {
                    data.map((item,index)=>{
                        return(
                            <Product 
                            id={item.id}
                            img={item.image} 
                            name={item.name} 
                            desc={item.desc} 
                            price={item.price} 
                            item={item}
                            key={index} />
                        )
                    })
                }
            </div>
        </section>
        </div>
    //     <main className="block col-2">
    //     <h2>Products</h2>
    //     <div className="row">
    //       {products.map((product) => (
    //         <Product key={product.id} product={product}></Product>
    //       ))}
    //     </div>
    //   </main>
    );
}
}
export default Home;