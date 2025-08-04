import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-row justify-between '>
      <p className="title">Prakash Swami</p>
      <div className="flex justify-center items-center gap-[1vw]">
        <p className="text-amber-50">Home</p>
        <p className="text-amber-50">Intro</p>
        <p className="text-amber-50">Projects</p>
        <p className="text-amber-50">Contact</p>
        
      </div>

    </div>
  )
}

export default Header;