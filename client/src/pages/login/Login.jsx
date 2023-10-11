import React, { useState } from 'react'
import "./Login.scss"
import axios from 'axios'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

const handleSubmit = async (e)=>{
  e.preventDefault()
  try{
    
    
    const res = await axios.post('http://localhost:8800/api/auth/login', {
      username, 
      password,
    }, {withCredentials:true})
    console.log(res.data)
  }catch(err){
    setError(err)
    console.log(err)
  }
}

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor='username'>Username</label>
        <input name='Username' id='username' type="text" placeholder='johndoe' onChange={e=>setUsername(e.target.value)} aria-labelledby="username" required/>

        <label htmlFor='password'>Password</label>
        <input type="password" id='password' name="Password" placeholder='********' onChange={e=>setPassword(e.target.value)} aria-labelledby="password   " required/>

        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login