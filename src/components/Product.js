import React from 'react'
import {useCart} from "react-use-cart";

export default function Product(props) {
    const{addItem}=useCart();
    return (
        <div class="col-4">
        <div class="card">
        <img class="card-img-top img-fluid" src={props.img} alt="product"/>
        <div class="card-body text-center">
        <h5 class="card-title">{props.name}</h5>
        
        <p class="card-text">{props.desc}</p>
        <h4 class="card-title">{props.price} Rs</h4>
        <button class="btn btn-dark" onClick={()=>addItem(props.item)}>Add to cart</button>
        </div>
        </div>
        </div>
        
    )
}
