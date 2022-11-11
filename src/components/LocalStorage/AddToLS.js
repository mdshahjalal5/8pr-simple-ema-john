 const addToDb = id =>{
    let shoppingCart = {};
    const storedCart = JSON.parse(localStorage.getItem('shopping-cart'));
    storedCart ? shoppingCart = storedCart : shoppingCart = {};
    // set quantity 
    const quantity = shoppingCart[id];
    quantity ? shoppingCart[id] = shoppingCart[id] + 1 : shoppingCart[id] = 1;
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
 }



 export {addToDb};