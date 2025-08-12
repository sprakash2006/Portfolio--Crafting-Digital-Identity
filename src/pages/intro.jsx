import React from 'react';
import './intro.css'
import linkedin from "../assets/linkedin-logo.png";
import github from "../assets/github-logo.png";
import leetcode from "../assets/leetcode-logo.png";
import cv from "../assets/cloud-download.png";
import RotatingCuboid from "../components/RotatingCuboid";
import cvPDF from '../assets/CVPrakashSwami.pdf';
import myphoto from '../assets/profP.jpg'

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="main-home-content">
        {/* 3D Animation Section */}
        <img className='h-100 myphoto' src={myphoto} alt="" />

        {/* Name and Title Section */}
        <div className="intro-name-title">
          <p>PRAKASH SWAMI</p>
          <p>"Versatile creator of innovative, efficient, and user-focused digital solutions across web and beyond."</p>
        </div>

        {/* Social Links Section */}
        <div className="sociallogo-div">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="socialLogo" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className="socialLogo" />
          </a>
          <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer">
            <img src={leetcode} alt="LeetCode" className="socialLogo" />
          </a>
          <a href={cvPDF} download="PrakashSwami_CV.pdf">
            <img src={cv} alt="Download CV" className="socialLogo" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Intro;