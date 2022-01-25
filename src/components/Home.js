import React,{ useState }  from "react";
import Carousel from 'react-bootstrap/Carousel'  
import Product from "./Product";
import data from "./../data";
import c4 from '../images/c4.jpg';
import c3 from '../images/c3.jpg';
import audio from '../images/audio.jpg';
import watch1 from '../images/watch1.jpg';
import pc from '../images/pc.jpg';
import tv from '../images/tv.jpg';
import c6 from '../images/c6.jpg';
import RT from '../images/RT.jpg';
import nd from '../images/nd.jpg';
import bumrah from '../images/bumrah.jpg';
import './home.css'
class Home extends React.Component{
    render(){
    return(
        <div>
            <div>  
                         <div class='container-fluid' >  
                          <div className="row title"  >  
                          {/* <div class="col-sm-12 btn btn-warning">  
                          
                         </div>   */}
                         </div>  
                         </div>  
                         <div className='container-fluid' >  
                         <Carousel>  
                         <Carousel.Item style={{'height':"800px"}} >  
                         <img style={{'height':"800px"}}  
                         className="d-block w-100"  
                        src={c6}  />  
                           <Carousel.Caption>  
                             {/* <h3>First Demo </h3>   */}
                                 </Carousel.Caption>  
                                 </Carousel.Item  >  
                                 <Carousel.Item style={{'height':"800px"}}>  
                                 <img style={{'height':"800px"}}  
                                   className="d-block w-100"  
                                    src={c3}    />  
                                       <Carousel.Caption>  
                                   {/* <h3>Second Demo</h3>   */}
                                      </Carousel.Caption>  
                                         </Carousel.Item>  
                                       <Carousel.Item style={{'height':"800px"}}>  
                                       <img style={{'height':"800px"}}  
                                        className="d-block w-100"  
                                         src={c4}   />  
                                        <Carousel.Caption>  
                                          {/* <h3>Third Demo</h3>   */}
                                          </Carousel.Caption>  
                                         </Carousel.Item>  
                                        </Carousel>  
                                        
                                </div>  
                        </div> 
                        <div class="all">
        
        <ul>
       <li><img src={RT}></img><p>OnePlus 9RT</p></li> 
       <li><img src={tv}></img><p>TV</p></li> 
       <li><img src={audio}></img><p>Ear Buds</p></li> 
       <li><img src={watch1} ></img><p className="watch">Watch</p></li> 
       <li><img src={pc}></img><p>Power & Cables</p></li> 
       <li><img src={nd}></img><p>One PLus Node Series</p></li> 
      
       </ul>
   
       </div>
       <div class="band">
           <img src={bumrah} style={{'width':"100%"}}></img>
       </div>
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