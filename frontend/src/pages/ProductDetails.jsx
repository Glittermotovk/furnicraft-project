import React from 'react'
import { useParams, Link } from 'react-router-dom'

const PRODUCTS = [
  { id:1, name:'Wooden Chair', price:'₹4,999', img:'https://via.placeholder.com/800x500?text=Wooden+Chair', desc:'High-quality teak wood chair with comfortable back support.', specs:{material:'Teak Wood', weight:'7 KG', dims:'40×40×90 cm'} },
  { id:2, name:'Modern Sofa', price:'₹24,999', img:'https://via.placeholder.com/800x500?text=Modern+Sofa', desc:'Comfortable 3-seater with soft cushions.', specs:{material:'Fabric & Wood', weight:'45 KG', dims:'200×90×85 cm'} },
  { id:3, name:'Dining Table', price:'₹12,999', img:'https://via.placeholder.com/800x500?text=Dining+Table', desc:'Solid wood dining table for family meals.', specs:{material:'Oak Wood', weight:'30 KG', dims:'150×90×75 cm'} },
]

export default function ProductDetail(){
  const { id } = useParams()
  const pid = Number(id)
  const product = PRODUCTS.find(p => p.id === pid)
  if(!product) return <div className="container"><h2>Product not found</h2><Link to="/">Back</Link></div>

  return (
    <div className="container" style={{maxWidth:800}}>
      <h1>{product.name}</h1>
      <img src={product.img} alt={product.name} style={{width:'100%', borderRadius:8}} />
      <h2 style={{color:'#1a7'}}> {product.price}</h2>
      <p>{product.desc}</p>
      <h3>Specifications</h3>
      <ul>
        <li>Material: {product.specs.material}</li>
        <li>Weight: {product.specs.weight}</li>
        <li>Dimensions: {product.specs.dims}</li>
      </ul>
      <p><Link to="/products">← Back to Products</Link></p>
    </div>
  )
}
