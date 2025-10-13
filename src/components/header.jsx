import React, { useState } from 'react';
import "../components/header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const smoothScroll = (id, duration = 1000) => {
    const target = document.getElementById(id);
    if (!target) return;

    const start = window.scrollY;
    const end = target.offsetTop;
    const distance = end - start;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percent = Math.min(progress / duration, 1);
      window.scrollTo(0, start + distance * percent);
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
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
        <a
          className="text-amber-50"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            smoothScroll("home", 1500);
            setIsMenuOpen(false);
          }}
        >
          Home
        </a>

        <a
          className="text-amber-50"
          href="#intro"
          onClick={(e) => {
            e.preventDefault();
            smoothScroll("intro", 500);
            setIsMenuOpen(false);
          }}
        >
          Intro
        </a>

        <a
          className="text-amber-50"
          href="#stack"
          onClick={(e) => {
            e.preventDefault();
            smoothScroll("stack", 500);
            setIsMenuOpen(false);
          }}
        >
          Stack
        </a>

        <a
          className="text-amber-50"
          href="#conquest"
          onClick={(e) => {
            e.preventDefault();
            smoothScroll("conquest", 500);
            setIsMenuOpen(false);
          }}
        >
          Conquest
        </a>

        <a
          className="text-amber-50"
          href="#project"
          onClick={(e) => {
            e.preventDefault();
            smoothScroll("project", 500);
            setIsMenuOpen(false);
          }}
        >
          Projects
        </a>

        <a
          className="text-amber-50"
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            smoothScroll("contact", 500);
            setIsMenuOpen(false);
          }}
        >
          Contact
        </a>

      </div>
    </div>
  );
};

export default Header;
