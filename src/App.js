import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './component/Country/Country'
import Cart from './component/Cart/Cart';


function App() {
 const [countries, setCountries] =  useState([]);
 const [cart, setCart] =  useState([]);
 useEffect(()=>{
   fetch('https://restcountries.eu/rest/v2/all')
   .then(res => res.json())
   .then(data=>setCountries(data));
 },[]);
 const handleDetails = (clickedCountry)=>{
  const newCart = [...cart,clickedCountry];
  setCart(newCart);
  console.log(newCart);
 }
  return (
    <div className="App">
    <h1>country loaded: {countries.length}</h1>
    <h2>country added:{cart.length}</h2>
    <Cart cart={cart}></Cart>
    {
      countries.map(country=><Country values={country} handleDetails={handleDetails} key={country.alpha3Code}></Country>)
    }
 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
