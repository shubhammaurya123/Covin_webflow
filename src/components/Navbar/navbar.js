import React from 'react'
import './navbar.css'
import logo from '../Icon/covinIcon.png'
const navbar = () => {
  return (
      <div className='navbar_1' >
          <div className='logo' > 
            <img src= {logo} alt = "covin logo" className='logoImage'></img> 
            </div>
           <div className='ListItem' > 
              <span className='Item'>Pricing </span>
              <span className='Item'>Product </span>
              <span className='Item'> Integration</span>
              <span className='Item'>solution </span>
              <span className='Item'> Resources</span>
              <span className='Item'> About Us</span>
              <div className='RightBtn_1'>
                <button className='BookDemo' > BookDemo</button>
                <button className='Signup_1' > Signup</button>
              </div>
            </div>
  
      </div>
  )
}

export default  navbar
