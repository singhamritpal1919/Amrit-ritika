import React, { useState } from "react";
import './Login.css'
import {Link} from 'react-router-dom'
// import Signup from "../Signup/Signup.jsx";
import Validation from "../LoginValidation/LoginValidation";

function Login() {

  const [values, setValues] = useState({
      email: '',
      password: ''
  })

  const [errors, setErrors] = useState({})

  const handleInput = (event)=> {
    setValues(prev => ({...prev, [event.target.name]:[event.target.value]}))
  }

  const handleSubmit =(event)=> {
    event.preventDefault();
    setErrors(Validation(values));
  }

  return(
    
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>Login</h1>
          <form action="" onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            <div>
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" placeholder="Email Address" onChange={handleInput} name="email" />
            {errors.email && <span className="red">{errors.email}</span>}
            </div>
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" placeholder="Password" onChange={handleInput} name="password"/>
            {errors.password && <span className="red">{errors.password}</span>}
            </div>
        
        <button type="submit">Login</button>
        </form>
        
        <p className="loginsignup-login">Don't have an account? 
        <span><Link to='/Signup'>Create Account</Link></span></p>
        
        {/* <div className="loginsignup-agree"> */}
          {/* <input type="checkbox" name="" id="" /> */}
          {/* <p>By continuing , i agree to the terms of use & privacy policy.</p> */}
          {/* </div> */}
        </div>
      </div>
    )
  }

export default Login