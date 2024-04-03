import React,{useState} from "react";
import {Link} from 'react-router-dom'
import Validation from "../LoginValidation/LoginValidation";

function Signup() {
  const [values, setValues] = useState({
    FirstName: '',
    LastName:'',
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
          <h1>Sign Up</h1>

          <form action="" onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            <div>
            <input type="text" placeholder="First Name" onChange={handleInput} name="FirstName"/>
            {errors.FirstName && <span className="red">{errors.FirstName}</span>}
            </div>
            <div>
            <input type="text" placeholder="Last Name" onChange={handleInput} name="LastName"/>
            </div>
            <div>
            <input type="email" placeholder="Email Address" onChange={handleInput} name="email" />
            {errors.email && <span className="red">{errors.email}</span>}
            </div>
            <div>
            <input type="password" placeholder="Password" onChange={handleInput} name="password"/>
            {errors.password && <span className="red">{errors.password}</span>}
            </div>
            
            
            
            
          </div>
        
        <button type="submit">Sign Up</button>
        </form>

        <p className="loginsignup-login">Already have an account? 
        <span><Link to='/Login'>Login</Link></span></p>
        </div>
    </div>
  )
  
  }

  export default Signup