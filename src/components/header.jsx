import React, { useState } from 'react';
import "../components/header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='header-div'>
      <div>
        <p className="title text-amber-400">Prakss !</p>
      </div>
      
      {/* Desktop Navigation */}
      <div className="flex justify-center items-center navigation desktop-nav">
        <a className="text-amber-50" href="#home">Home</a>
        <a className="text-amber-50" href="#intro">Intro</a>
        <a className="text-amber-50" href="#stack">Stack</a>
        <a className="text-amber-50" href="#conquest">Conquest</a>
        <a className="text-amber-50" href="#project">Projects</a>
        <a className="text-amber-50" href="#contact">Contact</a>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-btn text-amber-50"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <a className="text-amber-50" href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
        <a className="text-amber-50" href="#intro" onClick={() => setIsMenuOpen(false)}>Intro</a>
        <a className="text-amber-50" href="#stack" onClick={() => setIsMenuOpen(false)}>Stack</a>
        <a className="text-amber-50" href="#conquest" onClick={() => setIsMenuOpen(false)}>Conquest</a>
        <a className="text-amber-50" href="#project" onClick={() => setIsMenuOpen(false)}>Projects</a>
        <a className="text-amber-50" href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
      </div>
    </div>
  )
}

export default Header;