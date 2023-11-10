import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import plaidbeet from 'src/assets/P2PDWD3.png'

function PlaidBeet() {


  return (
    <div>
        <section id='Hero'>
            <div id='heroImage'>
                <img src={plaidbeet} alt='headphone'/>
            </div>
            <div id='heroText'>
            <h3 className='productText'>PLAID <span className='redT'>B</span>EET</h3>
                <p>
                    <b>Type:</b> In-ear design for mobility.<br></br>
                    <b>Driver Size:</b> 10mm drivers with clear audio.<br></br>
                    <b>Connectivity:</b> Wired with a 3.5mm audio jack.<br></br>
                    <b>Microphone:</b> In-line microphone for calls.<br></br>
                    <b>Compatibility:</b> Works with smartphones and laptops.<br></br>
                </p>
                <Link to="/purchase" id="purchaseLink"><button id='cartAddBtn'><p>PUR<span className='redT'>C</span>HASE</p></button></Link>
            </div>
        </section>
    </div>
  )
}

export default PlaidBeet
