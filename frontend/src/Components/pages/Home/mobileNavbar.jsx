import React from "react";

function mobileNavbar (props) {
  return (
    <>
    <div className="w3-sidebar w3-black w3-bar-block w3-collapse w3-card w3-animate-right" style={{width:"200px", right:0}} id="mySidebar">
        <button className="w3-bar-item w3-button w3-large w3-hide-large" onclick="w3_close()">Close &times;</button>
        <a href="#We Serve" className="w3-bar-item w3-button">HOME</a>
              <a href="#Amenities" className="w3-bar-item w3-button">EVENTS</a>
              <a href="#About Us" className="w3-bar-item w3-button">NEWS</a>
              <a href="#Gallery" className="w3-bar-item w3-button">SUBMIT AN EVENT</a>
              <a href="#Contact Us" className="w3-bar-item w3-button">HOW IT WORK</a>
      </div>
      <a href="." className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick="w3_open()">
            <i className="fa fa-bars"></i>
          </a>
      </>
  )
}

export default mobileNavbar