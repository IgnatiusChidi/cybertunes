import React from 'react'
import { Link } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import '../App.css'
import img from './assets/P2PDWD2.png'

function Hero() {
  return (
    <section id='Hero'>
        <div id='heroImage'>
            <img src={img} alt='headphone' loading='lazy'/>
        </div>
        <div id='heroText'>
            <h1>CYBER<span className='redT'>T</span>UNES</h1>
            <p>
              Experience audio perfection with Cybertunes.<br></br>
              Elevate your sound today!
            </p>
            <Link to="/collections"><button id='heroButton'><p>EXP<span className='redT'>L</span>ORE</p></button></Link>
        </div>
    </section>
  )
}

export default Hero
