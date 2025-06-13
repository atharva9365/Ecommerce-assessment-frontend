import React from 'react'
import "./loginsignup.css"

const LoginSignup = () => {
  return (
    <>
       <div className='login-signup'>
           <div className='login-signup-container'>
              <h1 style={{'textAlign':"center"}}>Login</h1>
                 <div className='login-signup-fields'>
                      <input type="text" placeholder='Your Name' />
                      <input type="Email" placeholder='Your Email Address' />
                      <input type="password" placeholder='Password' />
                  </div> 
                  <button>Continue</button>
                  <p className="login-sigup-login">Already have account? <span>Signup Here</span></p>
                   <div className="loginsignup-agree">
                       <input type="checkbox" name='' id='' />
                       <p>By continuing, I agree to the terms of use & privacy policy.</p>
                   </div>
            </div>
       </div>
    </>
  )
}

export default LoginSignup