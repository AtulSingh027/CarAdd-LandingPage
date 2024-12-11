import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav>
        <div className='nav-logo'>EV-olution</div>
        <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>Service</li>
            <li id='ex'>Explore</li>
        </ul>
    </nav>
  )
}
