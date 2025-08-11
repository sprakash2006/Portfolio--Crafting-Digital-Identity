import React from 'react'
import ProjectCard from '../components/ProjectCard'
import './Project.css'

const Project = () => {
  return (
    <>
    <div>
        <div className='project-page-heading'>
          <p className='project-page-title'>Portfolio</p>
          <p className='project-page-subheading'> Turning Ideas into Impact !</p>
        </div>
        <div className='project-page'>
          <ProjectCard className='indu-card' />
        </div>
      </div>
    </>
  )
}

export default Project
