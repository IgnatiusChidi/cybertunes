import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


function Checkwave() {


  return (
    <section id='Hero'>
        <div id='heroImage'>
            <img src='src/assets/P2PDWD2.png' alt='headphone' loading='lazy'/>
        </div>
        <div id='heroText'>
            <h3 className='productText'>CHECK <span className='redT'>W</span>AVE</h3>
            <p>
              <b>Type:</b> On-ear design for portability.<br></br>
              <b>Driver Size:</b> 50mm drivers for enhanced bass.<br></br>
              <b>Connectivity:</b> Wireless with Bluetooth 5.0.<br></br>
              <b>Battery Life:</b> Up to 20 hours of playback.<br></br>
              <b>Active Noise Cancellation:</b> Blocks ambient noise for immersion.<br></br>
            </p>
            <Link to="/purchase" id="purchaseLink"><button id='cartAddBtn'><p>PUR<span className='redT'>C</span>HASE</p></button></Link>
        </div>
    </section>
  )
}

export default Checkwave