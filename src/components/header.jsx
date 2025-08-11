import React from 'react';
import "../components/header.css"

const Header = () => {
  return (
    <div className='header-div'>
      <div>
        <p className="title text-amber-400">Prakss!</p>
      </div>
      <div className="flex justify-center items-center navigation">
        <a className="text-amber-50" href="#home">Home</a>
        <a className="text-amber-50" href="#intro">Intro</a>
        <a className="text-amber-50" href="#stack">Stack</a>
        <a className="text-amber-50" href="#conquest">Conquest</a>
        <a className="text-amber-50" href="#project">Projects</a>
        <a className="text-amber-50" href="#contact">Contact</a>
      </div>

    </div>
  )
}

export default Header;