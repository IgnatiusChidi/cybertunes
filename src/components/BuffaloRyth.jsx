import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import buffaloRyth from '../assets/P2PDWD1.png'

function BuffaloRyth() {


  return (
    <section id='Hero'>
        <div id='heroImage'>
            <img src={buffaloRyth} alt='headphone' loading='lazy'/>
        </div>
        <div id='heroText'>
            <h3 className='productText'>BUFFALO <span className='redT'>R</span>YTH</h3>
            <p>
              <b>Type:</b> Over-ear design for comfort.<br></br>
              <b>Driver Size:</b> 40mm drivers for quality sound.<br></br>
              <b>Connectivity:</b> Wired with a 3.5mm audio jack.<br></br>
              <b>Microphone:</b> Built-in noise-canceling microphone.<br></br>
              <b>Frequency Response:</b> 20Hz - 20kHz for a wide range of audio.<br></br>
            </p>
            <Link to="/purchase" id="purchaseLink"><button id='cartAddBtn'><p>PUR<span className='redT'>C</span>HASE</p></button></Link>
        </div>
    </section>
  )
}

export default BuffaloRyth
