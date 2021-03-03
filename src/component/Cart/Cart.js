import React from 'react';
// import country from '../Country/Country';

const Cart = (props) => {
    const cart = props.cart;
    // let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation = totalPopulation + country.population;    
    // }
    let totalPopulation = cart.reduce((sum,country)=>sum+country.population,0);

    return (
        <div>
            <p>This is cart: {cart.length}</p>
            <h3>Total populatins : {totalPopulation}</h3>
        </div>
    );
};

export default Cart;