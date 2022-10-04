import React, { useEffect } from 'react'
import { useState } from 'react'
var mySidebar = document.getElementById("mySidebar");
import laptopNavbar from './laptopNavbar';
import mobileNavbar from './mobileNavbar';

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
  const [width, setWidth] = useState(window.innerWidth)
  console.log(width)

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
  }
  )

  if(width > 500) {
    return <laptopNavbar />
  }
    return <mobileNavbar />
}

export default Nav