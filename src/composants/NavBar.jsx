import React from 'react'
import { FaHotel } from 'react-icons/fa'
import '../styles/Navbar.css'

const NavBar = () => {
  return (
    <div className='navbar-resto'>
        <div>
           <FaHotel className='navbar-icon'/>
           <h1 style={{color:'black'}}>Tasty Food</h1>
        </div>
    </div>
  )
}

export default NavBar
