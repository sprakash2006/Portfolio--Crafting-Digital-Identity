import React from 'react'
import './contact.css'
import MacCodeCardComp from '../components/MacCodeCardcomp'
import MacCodeCardMob from '../components/MacCodeCardmob'
import ContactAni from '../components/ContactAni'
import useMediaQuery from '../Hooks/useMediaQuery';

const Contact = () => {
  const isMobile = useMediaQuery("(max-width: 391px)");

  return (
    <>
      <div className='contact-page'>
        <div className='profCard'>
          {!isMobile && <ContactAni />}
        </div>
        <div className='conCard'>
          {isMobile ? <MacCodeCardMob /> : <MacCodeCardComp />}
        </div>
      </div>
    </>

  )
}

export default Contact;
