import React, { Component } from 'react';


const Travel =({destination, country, photo,distance}) => {
 return <div>

    <div>Destination: {destination}</div> <br/>
    <div>Country: {country}</div><br/>
    <div><img src= {photo}/></div>
    <div>Distance: {distance}</div>
    <br/>
    <br/>
    <br/>


</div>
}



export default Travel;