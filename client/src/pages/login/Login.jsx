  import React, { useState } from 'react'
  import "./Login.scss"
  import newRequest from '../../utils/newRequest.js'
  import { useNavigate } from 'react-router-dom'
  import { toast } from 'react-toastify'
  import 'react-toastify/dist/ReactToastify.css'
  import { ToastContainer } from 'react-toastify'


  const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post('/auth/login', { username, password });
      localStorage.setItem('currentUser', JSON.stringify(res.data));
      // Display success notification
      toast.success('Login successful! Redirecting...', {
        onClose: () => navigate('/'), // Redirect after the notification is closed
      });
    } catch (err) {
      setError(err.response.data);
      toast.error('Login failed. Please check your Credentials.');
    }
  };
  

    return (
      <div className='login'>
      <ToastContainer />
        <form onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          <label htmlFor='username'>Username</label>
          <input name='Username' id='username' type="text" placeholder='johndoe' onChange={e=>setUsername(e.target.value)} aria-labelledby="username" required/>

          <label htmlFor='password'>Password</label>
          <input type="password" id='password' name="Password" placeholder='********' onChange={e=>setPassword(e.target.value)} aria-labelledby="password   " required/>

          <button type='submit'>Login</button>
          {/* {error && error} */}
        </form>
      </div>
    )
  }

  export default Login