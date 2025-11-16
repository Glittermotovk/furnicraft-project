import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav(){
  return (
    <nav>
      <div className="logo">FurniCraft</div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <Link to="/feedback">Feedback</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}
