import React from 'react'
import "./offers.css";
import exclusive_image from '../assets/exclusive_image.png'
const Offers = () => {
  return (
   <div className="offers">
    <div className="offers-left">
        <h1>EXCLUSIVE</h1>
        <h1>Offers For You</h1>
        <p>Only on Best Seller Product</p>
        <button>CHECK NOW</button>
    </div>
    <div className="offers-right">
      <img src={exclusive_image} alt="" />
    </div>
   </div>
  )
}

export default Offers