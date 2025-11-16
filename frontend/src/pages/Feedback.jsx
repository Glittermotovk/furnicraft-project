import React, {useState} from 'react'

export default function Feedback(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [status, setStatus] = useState('')

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value})

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('Sending...')
    try{
      const res = await fetch('http://localhost:8000/api/feedback/', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(form)
      })
      if(res.ok){
        setStatus('Thank you! Your feedback was submitted.')
        setForm({name:'', email:'', message:''})
      } else {
        const data = await res.json()
        setStatus('Error: ' + (data.detail || JSON.stringify(data)))
      }
    }catch(err){
      setStatus('Network error: ' + err.message)
    }
  }

  return (
    <div className="container" style={{maxWidth:600}}>
      <h2>Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div style={{marginBottom:8}}>
          <label>Name</label><br/>
          <input name="name" value={form.name} onChange={handleChange} required style={{width:'100%'}} />
        </div>
        <div style={{marginBottom:8}}>
          <label>Email</label><br/>
          <input name="email" type="email" value={form.email} onChange={handleChange} required style={{width:'100%'}}/>
        </div>
        <div style={{marginBottom:8}}>
          <label>Message</label><br/>
          <textarea name="message" value={form.message} onChange={handleChange} required style={{width:'100%'}}/>
        </div>
        <button type="submit">Send Feedback</button>
      </form>
      <p>{status}</p>
    </div>
  )
}
