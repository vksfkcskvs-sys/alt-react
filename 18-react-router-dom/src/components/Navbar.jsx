import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>      
      <div className='nav'>
      <h3>Kunal</h3>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/contact'>Contact Us</Link>
        <Link to='/product'>Product</Link>
      </div>
    </div>
    </div>
  )
}

export default Navbar