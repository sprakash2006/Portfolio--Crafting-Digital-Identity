import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-row justify-between w-[100%] h-[5vw] header-div'>
      <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div>
        <p className="title text-amber-400">Prakash Swami</p>
      </div>
      <div className="flex justify-center items-center gap-[1.5vw] navigation">
        <a className="text-amber-50" href="#intro">Intro</a>
        <a className="text-amber-50" href="#skills">Stack</a>
        <a className="text-amber-50" href="#projects">Projects</a>
        <a className="text-amber-50" href="#contact">Contact</a>
      </div>

    </div>
  )
}

export default Header;