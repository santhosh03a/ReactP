import React,{ useState }  from "react";
import Product from "./Product";
import data from "./../data";
class Home extends React.Component{
    render(){
    const{products}=data;
    return(
        <div>
        <h1 class="text-center mt-3">Products</h1>
        <section class="container">
            <div class="row">
                {
                    products.map((item,index)=>{
                        return(
                            <Product 
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