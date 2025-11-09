import React, { useEffect, useRef } from 'react';
import './intro.css';
import linkedin from "../assets/linkedin-logo.png";
import github from "../assets/github-logo.png";
import leetcode from "../assets/leetcode-logo.png";
import cv from "../assets/cloud-download.png";
import cvPDF from 'public/PRAKASHSWAMICV.pdf';
import myphoto from '../assets/myimg1.jpg';
import TextAnimation from '../components/textAnimation'
import useMediaQuery from '../Hooks/useMediaQuery';

const Intro = () => {
  const isMobile = useMediaQuery("(max-width: 450px)");

  return (
    <div className='h-[46vw] w-[100vw] relative main-home-content'>
      <div className='flex flex-col justify-center items-center main-home-content-left'>
        <div className='intro-name-title'>
          {isMobile && <img className='myimgs' src={myphoto} alt="My profile" />}

          {/* Animated Name */}
          <p className="animated-text">
            <TextAnimation />
          </p>

          <p className="intro-subtitle">
            "Versatile creator of innovative, efficient, and user-focused digital solutions across web and beyond."
          </p>
        </div>

        {/* Social Logos */}
        <div className='sociallogo-div flex gap-5'>
          <a href="https://www.linkedin.com/in/prakash-swami/" target="_blank" rel="noopener noreferrer">
            <img className='socialLogo' src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://leetcode.com/u/sprakash_001/" target="_blank" rel="noopener noreferrer">
            <img className='socialLogo' src={leetcode} alt="LeetCode" />
          </a>
          <a href="https://github.com/sprakash2006" target="_blank" rel="noopener noreferrer">
            <img className='socialLogo' src={github} alt="GitHub" />
          </a>
          <a href={cvPDF} target="_blank" rel="noopener noreferrer">
            <img className='socialLogo' src={cv} alt="Resume PDF" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
