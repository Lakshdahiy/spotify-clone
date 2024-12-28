import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserData } from '../context/User'

function Login() {
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {loginUser,btnLoading} = UserData()
    
    const navigate = useNavigate();


  const submitHandler=e=>{
    e.preventDefault()
      loginUser(email,password,navigate);
      
  }
  return (
    <div className='flex items-center justify-center h-screen max-h-screen'>
      <div className='bg-black text-white p-8 rounded-lg  shadow-lg max-w-md w-full'>
        <h2 className='text-3xl font-semibold text-center'>Login to Spotify</h2>
        <form className='mt-8' onSubmit={submitHandler}>
          <div className='mb-4'>
            <label className='block text-sm font-medium mb-1'>
              Email or username
            </label>
            <input type='email' placeholder='Email or username'
            className='auth-input'
            value={email}
            onChange={e=>setEmail(e.target.value)}
            required/>

          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium mb-1'>
             password
            </label>
            <input type='password' placeholder='password'
            className='auth-input'
            value={password}
            onChange={e=>setPassword(e.target.value)}
            required/>
          </div>
          <button disabled={btnLoading} className='auth-btn'>{btnLoading?"please wait":'Login'}</button>
        </form>
        <div className="text-center mt-6">
          <Link to='/register' className='text-sm text-gray-400 hover:text-gray-300'>don't have account?</Link>
        </div>
        </div>
        </div>
  )
}

export default Login