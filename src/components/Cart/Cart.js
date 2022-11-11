import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    // console.log(cart)
    let total = 0; 
    let quantity = 0;
    let shipping = 0;
    for(const prodcut of cart){
        total +=prodcut.price * prodcut.quantity;
        shipping += prodcut.shipping * prodcut.quantity;
        quantity += prodcut.quantity;
    }
    const taxt = ((total + shipping ) * 0.1).toFixed(2);
    const grandTotal = (Number(taxt) + total + shipping).toFixed(2)
    return (
        <div className='cart'>
           <div className="cart-info">
           <h2>Order Summary</h2>
            <p>Total Quantity: <b> ${quantity} </b> </p>
            <p>Total Shipping: <b>${shipping} </b> </p>
            <p>Total Price: <b>${total} </b> </p>
            <p>Tax: <b>{taxt} </b> </p>
            <p>Grand Total: <b>{grandTotal} </b> </p>
           </div>
        </div>
    );
};

export default Cart;