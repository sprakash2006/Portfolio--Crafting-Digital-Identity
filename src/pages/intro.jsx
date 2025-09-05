import React from 'react';
import './intro.css'
import linkedin from "../assets/linkedin-logo.png";
import github from "../assets/github-logo.png";
import leetcode from "../assets/leetcode-logo.png";
import cv from "../assets/cloud-download.png";
import RotatingCuboid from "../components/RotatingCuboid";
import cvPDF from '../assets/CVPrakashSwami.pdf';
import myphoto from '../assets/profP.jpg'
import useMediaQuery from '../Hooks/useMediaQuery';


const Intro = () => {

  const isMobile = useMediaQuery("(max-width: 391px)");

  return (
    <div className='h-[46vw] w-[100vw] relative main-home-content'>
      <div className='flex flex-col justify-center items-center main-home-content-left'>
        <div className='intro-name-title'>
          {isMobile && <img className='h-100 myphoto' src={myphoto} alt="" />}
          <p>PRAKASH SWAMI</p>
          <p>"Versatile creator of innovative, efficient, and user-focused digital solutions across web and beyond."</p>
        </div>
        <div className='sociallogo-div flex gap-5'>
          <a href="https://www.linkedin.com/in/prakash-swami32431" target="_blank" rel="noopener noreferrer">
            <img className='socialLogo' src={linkedin} alt="linkedin-logo" />
          </a>
          <a href="https://leetcode.com/u/sprakash" target="_blank" rel="noopener noreferrer">
            <img className='socialLogo' src={leetcode} alt="leetcode-logo" />
          </a>
          <a href="https://github.com/sprakash" target="_blank" rel="noopener noreferrer">
            <img className='socialLogo' src={github} alt="github-logo" />
          </a>
          <a href={cvPDF} target="_blank" rel="noopener noreferrer">
            <img className='socialLogo' src={cv} alt="pdf-logo" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Intro;
