import React from 'react'
import './Css/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
        <div className='loginsignup-conatainer'>
          <h1>Sign-Up</h1>
          <div className='loginsignup-fields'>
            <input type='text' placeholder='Your name'/>
            <input type='email' placeholder='Enter your email'/>
            <input type='password' placeholder='Password'/>
          </div>
          <button>Continue</button>
          <p className='loginsignup-login'>Already have an account <span>Log-In</span></p>
          <div className='logiinsignup-aree'>
            <input type='checkbox'/>
            <p>I agree to terms and condtions</p>
          </div>
        </div>
    </div>
  )
}

export default LoginSignup