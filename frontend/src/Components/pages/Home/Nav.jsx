import React from 'react'
import { Link } from 'react-router-dom';
import '../../../App.css'
var mySidebar = document.getElementById("mySidebar");


function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}

const Nav = () => {
  return (
    <div className='leftm'>
      <div className="w3-top">
      <div className="w3-bar w3-white w3-card" id="myNavbar">
        <a href="#Home" className="w3-bar-item w3-button w3-wide"><img src="Logo.png" alt="" style={{width: "30px"}} />SHAW'rganizer</a>
        <div className="w3-right w3-hide-small">
          <Link to="/" className="w3-bar-item w3-button">HOME</Link>
          <Link to="/events" className="w3-bar-item w3-button">EVENTS</Link>
          <Link to="/news" className="w3-bar-item w3-button">NEWS</Link>
          <Link to="/submit_an_event" className="w3-bar-item w3-button">SUBMIT AN EVENT</Link>
          <Link to="/how_it_work" className="w3-bar-item w3-button">HOW IT WORK</Link>
          <Link to="/login" className="w3-bar-item w3-button">LOGIN</Link>
          
        </div>
        <a href="." className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onClick={() => w3_open()}>
        <i className="fa fa-bars"></i>
      </a>
      </div>
    </div>

  <div className="w3-sidebar w3-black w3-bar-block w3-collapse w3-card w3-animate-right" style={{width:"200px", right:0}} id="mySidebar">
    <button className="w3-bar-item w3-button w3-large w3-hide-large" onclick="w3_close()">Close &times;</button>
    <a href="#We Serve" className="w3-bar-item w3-button">HOME</a>
          <a href="#Amenities" className="w3-bar-item w3-button">EVENTS</a>
          <a href="#About Us" className="w3-bar-item w3-button">NEWS</a>
          <a href="#Gallery" className="w3-bar-item w3-button">SUBMIT AN EVENT</a>
          <a href="#Contact Us" className="w3-bar-item w3-button">HOW IT WORK</a>
  </div>
    </div>
  )
}

export default Nav