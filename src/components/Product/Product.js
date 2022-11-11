import React from 'react';
import './Product.css'
const Product = ({product, handleAddToCart}) => {
    // console.log(product);
    const {id, img, name, price, seller} = product;
    return (
        <div className='product'>
            <h2><i><p> <strong>{name} </strong> </p></i></h2>
             <img src={img} alt="" />
             <p>Price: <b>{price} </b> </p>
             <p>Seller: <b>{seller} </b> </p>
             <p>ID: <strong>{id} </strong> </p>
             <button onClick={()=>handleAddToCart(product)}>Add to Cart</button>
        </div>
    );
};
export default Product;