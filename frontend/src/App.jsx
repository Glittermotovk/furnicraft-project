import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import Feedback from './pages/Feedback'

export default function App(){
  return (
    <div>
      <Nav />
      <main style={{padding: '20px'}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/product/:id" element={<ProductDetail/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/feedback" element={<Feedback/>} />
        </Routes>
      </main>
    </div>
  )
}
