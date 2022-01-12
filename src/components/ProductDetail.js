import React from 'react'
import {useParams} from 'react-router'
import DATA from '../data'
import {useCart} from "react-use-cart";
import { useState } from 'react';

const ProductDetail = () => {
    const[cartBtn,setCartBtn]=useState("Add to cart")
    const{addItem}=useCart();
    const proid=useParams();
    const proDetail=DATA.filter(x => x.id == proid.id)
    const product = proDetail[0];
    console.log(proid);

    const handlecart=(product)=>{
        if(cartBtn==="Add to cart"){
            addItem(product);
            setCartBtn("Added to Cart")
        }
        else
        setCartBtn("Add to cart")
    }
    return (
        <>
            <div className='container my-5 py-3'>
              <div className='row'>
                <div className='col-md-6 d-flex justify-content-center mx-auto'>
                    <img src={product.image} alt={product.name}height="400px"/>
                </div>
                <div className='col-md-6'>
                    <h1 className='display-5 fw-bold'>{product.name}</h1>
                    <hr />
                    <h2 className='my-4'>{product.price}</h2>
                    <p className='lead'>{product.desc}</p>
                    <button className='btn btn-outline-dark' style={{width:"500px"}} onClick={()=>handlecart(product)}>{cartBtn}</button>
                </div>
              </div>  
            </div>
        </ >
    )
}

export default ProductDetail
