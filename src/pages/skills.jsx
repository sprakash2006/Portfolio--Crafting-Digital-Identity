import React from 'react'
import './skills.css'
import ProgrammingLanguagesCard from '../components/ProgrammingLanguagesCard'
import MovingStrip from '../components/movingStripe'


const Skills = () => {
  return (
    <div className='skill-page border-t-2 border-[#ff0000]'>
      <p className='skills-title'>Tech&nbsp;Stack&nbsp;</p>
      <div className='skill-content'>
        <ProgrammingLanguagesCard />
      </div>
    </div>
  )
}

export default Skills
