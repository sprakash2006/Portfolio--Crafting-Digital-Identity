import React from 'react'
import './skills.css'
import ProgrammingLanguagesCard from '../components/ProgrammingLanguagesCard'
import MovingStrip from '../components/movingStripe'


const Skills = () => {
  return (
    <div className='skill-page'>
      <MovingStrip />
      <p className='skills-title'>Tech&nbsp;&nbsp;&nbsp;Gears&nbsp;<span>⚙️</span></p>
      <div className='skill-content'>
        <ProgrammingLanguagesCard />
      </div>
    </div>
  )
}

export default Skills
