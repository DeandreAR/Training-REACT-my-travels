import React, { Component } from 'react';

const Travel = ({destination,country,photo,distance}) => {
return ( <>

    <div>Destination: {destination}</div> <br/>
    <div>Country: {country}</div><br/>
    <img src={photo} alt="Paysage"/>
    <div>Distance: {distance}</div>
<br/>
<br/>
<br/>
<br/>
</>
)
}



export default Travel