import React, { useEffect, useRef } from 'react';
import './intro.css';
import linkedin from "../assets/linkedin-logo.png";
import github from "../assets/github-logo.png";
import leetcode from "../assets/leetcode-logo.png";
import cv from "../assets/cloud-download.png";
import cvPDF from '../assets/CVPrakashSwami.pdf';
import myphoto from '../assets/myimg1.jpg';
import useMediaQuery from '../Hooks/useMediaQuery';

const Intro = () => {
  const isMobile = useMediaQuery("(max-width: 450px)");
  const nameRef = useRef(null);

  const name = "PRAKASH SWAMI";
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  useEffect(() => {
    const letters = nameRef.current.querySelectorAll(".letter");

    const animateSequentially = async () => {
      for (let i = 0; i < letters.length; i++) {
        const targetChar = letters[i].dataset.char;
        if (targetChar === " ") continue;

        letters[i].textContent = "X";
        letters[i].classList.remove("reveal");
        await sleep(100); // faster delay between letters

        letters[i].textContent = targetChar;
        letters[i].classList.add("reveal");
        await sleep(80); // faster next-letter delay
      }
    };

    // Initialize all letters as X
    letters.forEach(letter => {
      letter.textContent = letter.dataset.char === " " ? "\u00A0" : "X";
    });

    animateSequentially();
  }, []);

  return (
    <div className='h-[46vw] w-[100vw] relative main-home-content'>
      <div className='flex flex-col justify-center items-center main-home-content-left'>
        <div className='intro-name-title'>
          {isMobile && <img className='myimgs' src={myphoto} alt="" />}

          {/* Animated Name */}
          <p className="animated-text" ref={nameRef}>
            {name.split("").map((char, i) => (
              <span key={i} className="letter" data-char={char}>
                {char === " " ? "\u00A0" : "X"}
              </span>
            ))}
          </p>

          <p>"Versatile creator of innovative, efficient, and user-focused digital solutions across web and beyond."</p>
        </div>

        {/* Social Logos */}
        <div className='sociallogo-div flex gap-5'>
          <a href="https://www.linkedin.com/in/prakash-swami/" target="_blank" rel="noopener noreferrer">
            <img className='socialLogo' src={linkedin} alt="linkedin-logo" />
          </a>
          <a href="https://leetcode.com/u/sprakash_001/" target="_blank" rel="noopener noreferrer">
            <img className='socialLogo' src={leetcode} alt="leetcode-logo" />
          </a>
          <a href="https://github.com/sprakash2006" target="_blank" rel="noopener noreferrer">
            <img className='socialLogo' src={github} alt="github-logo" />
          </a>
          <a href={cvPDF} target="_blank" rel="noopener noreferrer">
            <img className='socialLogo' src={cv} alt="pdf-logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
