import React from 'react'
import { Link } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import '../App.css'
import { useEffect } from 'react'

import Hero from './Hero'
import Collections from './Collections'
import Contact from './Contact'
import BuffaloRyth from './BuffaloRyth'
import PlaidBeet from './PlaidBeet'
import Checkwave from './Checkwave'
import SignUp from './SignUp'
import Login from './Login'
import Forbidden from './Forbidden'

function Navbar() {

  useEffect(() =>{
    const hamburger = document.getElementById("hamburger");
    const link = document.getElementsByClassName("links");

    link.onclick = () =>{
        link.classList.toggle("activeLink")
    }

    hamburger.onclick = () =>{
        const navbar = document.getElementById("ul");
        navbar.classList.toggle("active");

        const overlay = document.getElementById("overlay");
        overlay.classList.toggle("overlayClass");

        const hbDiv = document.getElementById("hamburger");
        hbDiv.classList.toggle("lineAni");
    }
  }, []);

  return (
    <>
        <div id='overlay' className=''></div>
        <nav id='navbar'>
            <h1>CYBER<span className='redT'>T</span>UNES</h1>
            <ul id='ul' className=''>
                <li><Link to="/" className='links'>HOME</Link></li>
                <li><Link to="/collections" className='links'>COLLECTIONS</Link></li>
                <li><Link to="/contact" className='links'>CONTACT</Link></li>
                <li><Link to="/signup" className='links'>PROFILE</Link></li>
            </ul>
            <div id='hamburger'>
              <div className='line'></div>
              <div className='line'></div>
            </div>
        </nav>

        <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/collections' element={<Collections />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/buffaloryth' element={<BuffaloRyth />} />
            <Route path='/plaidbeet' element={<PlaidBeet />} />
            <Route path='/checkwave' element={<Checkwave />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/purchase' element={<Forbidden />} />
        </Routes>
    </>
  )
}

export default Navbar