import React, { useEffect, useState } from 'react';
import {addToDb} from '../LocalStorage/AddToLS'
import './Shop.css'
import Cart from '../Cart/Cart.js'
import Product from '../Product/Product';
const Shop = () => {
    const [products, setProducts] = useState([]);
    // console.log(products)
    const datas = async()=>{
        const res = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json'); 
        const data = await res.json();
        setProducts(data)
    }
    useEffect(()=>{
        datas()
    },[])
    const [cart, setCart] = useState([]);
    // console.log(cart)
    useEffect(()=>{
        const storedCart = JSON.parse(localStorage.getItem('shopping-cart'));
        const savedCart = [];
        if(storedCart){
            for(const id in storedCart){
                const quantity = storedCart[id];
                const addedProduct = products.find(product => product.id === id);
                if(addedProduct){
                    
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
                // console.log(addedProduct)
                }
            }
        }
        setCart(savedCart);
    },[products])
    const handleAddToCart = selectedProduct =>{
        // console.log(product);
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            setCart([...cart,selectedProduct])
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            selectedProduct.quantity = selectedProduct.quantity + 1;
            setCart([...rest,  selectedProduct])
        }
        addToDb(selectedProduct.id)
    }
    return (
      <div className='shop'>
        <div className='products-container'>
            {products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)}
        </div>
        <div className="cart-container">
            <Cart cart={cart}></Cart>
        </div>
      </div>
    );
};

export default Shop;