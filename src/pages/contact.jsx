import React from 'react'
import './contact.css'
import MacCodeCard from '../components/MacCodeCard'
import ContactAni from '../components/ContactAni'

const Contact = () => {
  return (
    <>
      <div className='contact-page'>
        <div className='profCard'>
          <ContactAni />
        </div>
        <div className='conCard'>
          <MacCodeCard />
        </div>
      </div>
    </>

  )
}

export default Contact;
