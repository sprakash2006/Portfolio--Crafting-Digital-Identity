import React from 'react'
import './certificate.css'
import Certificates from '../components/certificates'

const Certificate = () => {
  return (
    <div id='conquest' className='certificate-page'>
      <div className='certificate-header'>
        <p className='certificate-section-title'>My Certifications</p>
        <p className='certificate-section-description'>Here's a quick look at certifications I've earned — proof of passion, persistence, and painful amounts of debugging.</p>
      </div>
      <div className='cerSection'>
        <Certificates />
      </div>
    </div>
  )
}

export default Certificate
