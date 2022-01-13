import React from 'react';
import {useCart} from "react-use-cart";
import {Link} from 'react-router-dom'
const Cart=()=>{ 
        const{
            items,
            isEmpty,
            totalUniqueItems,
            totalItems,
            cartTotal,
            updateItemQuantity,
            removeItem,
            emptyCart
    }=useCart();
    if(isEmpty) return <h1 className='text-center'>your cart is empty</h1>
        return(
            <section className="py-4 container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h5>Cart({totalUniqueItems}) total Items:({totalItems})</h5>
                        <table className='table table-light table-hover m-0'>
                            <tbody>
                            
                            {items.map((item,index)=>{
                                return(
                                <tr key={index}>
                                    <td>
                                        <img src={item.image} style={{height:'6rem'}}/>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>Quantity({item.quantity})</td>
                                    <td>
                                        <button class="btn btn-light" onClick={()=>updateItemQuantity(item.id,item.quantity - 1)}>-</button>
                                        <button class="btn btn-light" onClick={()=>updateItemQuantity(item.id,item.quantity + 1)}>+</button>
                                        <button class="btn btn-dark" onClick={()=>removeItem(item.id)}>Remove Item</button>
                                    </td>
                                </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-auto ms-auto">
                        <h3>Total Price: {cartTotal}</h3>
                        
                    <div classname="col-auto">
                        <button className="btn btn-dark m-2" onClick={emptyCart}>Clear Cart</button>
                        <Link to="/Payhome"><button className="btn btn-dark m-2">Buy Now</button></Link>
                        </div>
                    </div>
                </div>
           </section>
        );
};
 
export default Cart;