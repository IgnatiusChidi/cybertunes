import React from 'react'
import { Link } from "react-router-dom"
import '../App.css'
import buffaloRyth from '../assets/P2PDWD1.png'
import checkwave from '../assets/P2PDWD2.png'
import plaidbeet from '../assets/P2PDWD3.png'

function Collections() {
  return (
    <section id='collections'>
      <div id='collectionsText'>
        <h1>CO<span className='redT'>L</span>LECTIONS</h1>
      </div>
      <div id='products'>
        <Link className='product' to="/buffaloryth">
            <img src={buffaloRyth} alt='headphone' loading='lazy'/>
            <h3 className='productText'>BUFFALO <span className='redT'>R</span>YTH</h3>
            <p className='productText'>20,000 NAIRA</p>
        </Link>

        <Link className='product' to="/checkwave">
            <img src={checkwave} alt='headphone' loading='lazy'/>
            <h3 className='productText'>CHECK <span className='redT'>W</span>AVE</h3>
            <p className='productText'>25,000 NAIRA</p>
        </Link>

        <Link className='product' to="/plaidbeet">
            <img src={plaidbeet} alt='headphone' loading='lazy'/>
            <h3 className='productText'>PLAID <span className='redT'>B</span>EET</h3>
            <p className='productText'>20,000 NAIRA</p>
        </Link>
      </div>
    </section>
  )
}

export default Collections
