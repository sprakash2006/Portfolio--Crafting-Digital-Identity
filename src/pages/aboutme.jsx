import React from 'react'
import "../pages/aboutme.css"
import dev from "../assets/video/developer-skills.webm"
import myphoto from '../assets/myimg1.jpg'

import useMediaQuery from '../Hooks/useMediaQuery';


const aboutme = () => {

  const isMobile = useMediaQuery("(max-width: 450px)");

  return (
    <div className='aboutMe-bg'>
      <p className='aboutme-title'>&lt;AboutMe /&gt;</p>
      <div className='flex flex-row justify-center items-center about-me-main-content'>
        {!isMobile && <img className='h-100 myphoto' src={myphoto} alt="" />}
        <p className='about-me-text'><span className='name'>Prakash Swami</span> <br /> A Computer Engineering student at VIT Pune with hands-on experience in modern web development.<br /> I create responsive UIs using React, Tailwind CSS, and GSAP, and contribute to real-world projects as a Website Development Assistant at VIT’s Social Welfare & Development Committee. Certified by Google, Udemy, and LetsUpgrade. <br /> <br /> I'm skilled in frontend and backend tools including Node.js, PostgreSQL, Git, and Figma. I'm currently seeking a web development internship to apply my skills and grow as a full-stack developer. <br /> <span className='star-pattern flex justify-center items-center'>⚝⚝⚝</span> </p>
      </div>
    </div>
  )
}

export default aboutme;
