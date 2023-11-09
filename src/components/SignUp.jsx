import React from 'react'
import { Link } from "react-router-dom"


function SignUp() {
  return (
    <section id='signup'>
        <form id='signupForm'>
            <h1>SIGN <span className='redT'>U</span>P</h1>
            <input type='text' placeholder='NAME'/>
            <input type='email' placeholder='EMAIL'/>
            <input type='password' placeholder='PASSWORD'/>
            <button type='submit' disabled={ true }>SUB<span className='redT'>M</span>IT</button>
            <Link to="/login" id='loginLink'>Login?</Link>
        </form>
    </section>
  )
}

export default SignUp