import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const products = [
    { id:1, name:"Wooden Chair", img:"https://via.placeholder.com/600x400?text=Wooden+Chair", price:"₹4,999", desc:"Premium Teak Wood Chair" },
    { id:2, name:"Modern Sofa", img:"https://via.placeholder.com/600x400?text=Modern+Sofa", price:"₹24,999", desc:"Comfortable 3-seater" },
    { id:3, name:"Dining Table", img:"https://via.placeholder.com/600x400?text=Dining+Table", price:"₹12,999", desc:"Solid Wood Table" },
    { id:4, name:"Office Chair", img:"https://via.placeholder.com/600x400?text=Office+Chair", price:"₹6,999", desc:"Ergonomic Office Chair" },
  ];

  return (
    <div>
      <div className="hero">
        <h1 style={{fontSize:48, margin:0}}>Welcome to FurniCraft</h1>
        <p style={{fontSize:18, opacity:0.95}}>Beautiful handcrafted furniture for your home — Style meets comfort.</p>
        <button style={{marginTop:20, padding:'12px 22px', background:'#e7d0a6', border:'none', borderRadius:6}}>Shop Now</button>
      </div>

      <div className="container">
        <section style={{marginTop:30}}>
          <h2>About Us</h2>
          <p>FurniCraft specialises in creating high-quality, handcrafted furniture designed to bring comfort and style to your home.</p>
        </section>

        <section style={{marginTop:30}}>
          <h2>Our Products</h2>
          <div className="products-grid" style={{marginTop:16}}>
            {products.map(p => (
              <Link to={`/product/${p.id}`} key={p.id} style={{textDecoration:'none', color:'inherit'}}>
                <div className="card">
                  <img src={p.img} alt={p.name} style={{width:'100%', height:150, objectFit:'cover', borderRadius:8}}/>
                  <h3 style={{marginTop:12}}>{p.name}</h3>
                  <p>{p.desc}</p>
                  <strong>{p.price}</strong>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section style={{marginTop:40, display:'flex', gap:20}}>
          <div style={{flex:1}}>
            <h2>Contact Us</h2>
            <p>Email: support@furnicraft.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
          <div style={{flex:1}}>
            <h2>Feedback</h2>
            <form action="/api/feedback/" method="post" onSubmit={(e)=>e.preventDefault()}>
              <input placeholder="Name" style={{width:'100%', marginBottom:8}} />
              <textarea placeholder="Message" rows={4} style={{width:'100%', marginBottom:8}}/>
              <button style={{width:'100%', padding:12, background:'#c49e60', color:'#fff', border:'none', borderRadius:8}}>Submit</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
