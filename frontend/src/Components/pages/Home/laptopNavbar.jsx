import React from "react"

function laptopNavbar (props){
  return (
    <div className="w3-top">
        <div className="w3-bar w3-white w3-card" id="myNavbar">
          <a href="#Home" className="w3-bar-item w3-button w3-wide"><img src="Logo.png" alt="" style={{width: "30px"}} /> SUBHEDAR</a>
          <div className="w3-right w3-hide-small">
            <a href="#We Serve" className="w3-bar-item w3-button">HOME</a>
            <a href="#Amenities" className="w3-bar-item w3-button">EVENTS</a>
            <a href="#About Us" className="w3-bar-item w3-button">NEWS</a>
            <a href="#Gallery" className="w3-bar-item w3-button">SUBMIT AN EVENT</a>
            <a href="#Contact Us" className="w3-bar-item w3-button">HOW IT WORK?</a>
          </div>
          
        </div>
      </div>
  )
}

export default laptopNavbar