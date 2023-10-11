import React from 'react'
import "./Login.scss"
const Login = () => {
  return (
    <div className='login'>
      <form>
        <h1>Sign in</h1>
        <label htmlFor=''>Username</label>
        <input name='Username' type="text" placeholder='johndoe'/>

        <label htmlFor=''>Password</label>
        <input type="password" name="Password" placeholder='********' />

        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login