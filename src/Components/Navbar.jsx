import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className="logo">
            <img src="/Img/brand_logo.png" alt="as" />
        </div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <button>Login</button>
    </nav>
  )
}
