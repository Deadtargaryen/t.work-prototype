import React, { useState } from 'react'
import "./Login.scss"
import axios from 'axios'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

const handleSubmit = async (e)=>{
  e.preventDefault()
  const res = await axios.post('localhost:8800/api/auth/login', {username, password})
}

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor=''>Username</label>
        <input name='Username' type="text" placeholder='johndoe' onChange={e=>setUsername(e.target.value)}/>

        <label htmlFor=''>Password</label>
        <input type="password" name="Password" placeholder='********' onChange={e=>setPassword(e.target.value)}/>

        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login