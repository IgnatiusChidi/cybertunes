import React from 'react'
import { Link } from "react-router-dom"

function Login() {
  return (
    <section id='signup'>
        <form id='signupForm'>
            <h1>LOG <span className='redT'>I</span>N</h1>
            <input type='text' placeholder='NAME'/>
            <input type='email' placeholder='EMAIL'/>
            <input type='password' placeholder='PASSWORD'/>
            <button type='submit'  disabled={ true }>SUB<span className='redT'>M</span>IT</button>
            <Link to="/signup" id='loginLink'>SignUp?</Link>
        </form>
    </section>
  )
}

export default Login