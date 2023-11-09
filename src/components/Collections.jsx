import React from 'react'
import { Link } from "react-router-dom"
import '../App.css'

function Collections() {
  return (
    <section id='collections'>
      <div id='collectionsText'>
        <h1>CO<span className='redT'>L</span>LECTIONS</h1>
      </div>
      <div id='products'>
        <Link className='product' to="/buffaloryth">
            <img src='src/assets/P2PDWD1.png' alt='headphone' loading='lazy'/>
            <h3 className='productText'>BUFFALO <span className='redT'>R</span>YTH</h3>
            <p className='productText'>20,000 NAIRA</p>
        </Link>

        <Link className='product' to="/checkwave">
            <img src='src/assets/P2PDWD2.png' alt='headphone' loading='lazy'/>
            <h3 className='productText'>CHECK <span className='redT'>W</span>AVE</h3>
            <p className='productText'>25,000 NAIRA</p>
        </Link>

        <Link className='product' to="/plaidbeet">
            <img src='src/assets/P2PDWD3.png' alt='headphone' loading='lazy'/>
            <h3 className='productText'>PLAID <span className='redT'>B</span>EET</h3>
            <p className='productText'>20,000 NAIRA</p>
        </Link>
      </div>
    </section>
  )
}

export default Collections