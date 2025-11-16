import React from 'react'
import { Link } from 'react-router-dom'
const PRODUCTS = [
  { id:1, name:'Wooden Chair', price:'₹4,999', img:'https://via.placeholder.com/600x400?text=Wooden+Chair' },
  { id:2, name:'Modern Sofa', price:'₹24,999', img:'https://via.placeholder.com/600x400?text=Modern+Sofa' },
  { id:3, name:'Dining Table', price:'₹12,999', img:'https://via.placeholder.com/600x400?text=Dining+Table' },
]
export default function Products(){
  return (
    <div className="container">
      <h2>All Products</h2>
      <div className="products-grid" style={{marginTop:16}}>
        {PRODUCTS.map(p=>(
          <Link to={`/product/${p.id}`} key={p.id} style={{textDecoration:'none', color:'inherit'}}>
            <div className="card">
              <img src={p.img} alt={p.name} style={{width:'100%', height:150, objectFit:'cover', borderRadius:8}}/>
              <h3>{p.name}</h3>
              <strong>{p.price}</strong>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
