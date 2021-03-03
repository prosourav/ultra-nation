import React from 'react';

const country = (props) => {
    // console.log("country name: ",props.values);
    const {name,capital,flag} = props.values;
    const flagStyle = {height:'60px'}
    const countryStyle = {border:'1px solid black', margin:'20px', padding:'20px'}
    const handleDetails = props.handleDetails;
    return (
        <div style={countryStyle}>
        <h4>Name : {name}</h4>
        <img src={flag} style={flagStyle} alt="" />
        <p>Population : {capital}</p>
        <button onClick={()=>handleDetails(props.values)}>Details</button>
        </div>
    );
};

export default country;
