import React from 'react'
import './ProjectCard.css'

const ProjectCard = () => {

  const ProjectArray = [
    {
      "id":1,
      "logo":"👤",
      "projectTitle":"My-portfolio",
      "techTools":["React", "Javascript", "CSS", "Tailwind", "NPM"],
      "description":"A responsive and visually appealing portfolio built with React and Vite for high performance. Styled using Tailwind CSS and custom CSS to achieve a clean, modern UI. Showcases my skills, projects, and experience with smooth navigation, interactive components, and optimized performance across all devices.",
      "link":"https://github.com/sprakash2006/portfolio"
    },
    {
      "id":2,
      "logo":"♻️",
      "projectTitle":"Solar-synergy",
      "techTools":["HTML", "CSS","Javascript"],
      "description":"This project marks a key milestone in my web development journey, created in my first year of Computer Engineering to apply and showcase my HTML and CSS skills. As my first independent project, it reflects my enthusiasm for building clean, functional, and responsive interfaces, while serving as a foundation for more advanced web applications in the future.",
      "link":"https://github.com/sprakash2006/Solar-Synergy"
    },
    {
      "id":3,
      "logo":"🎮",
      "projectTitle":"Game-mania",
      "techTools":["Python", "Pygame"],
      "description":"A set of classic and arcade-style games built with Python and Pygame, including Brickout, Flappy Bird, Shooter, Snake, and Tic Tac Toe. Showcases skills in game mechanics, collision detection, graphics rendering, and interactive design.",
      "link":"https://github.com/sprakash2006/Game-Mania"
    },
    {
      "id":4,
      "logo":"💵",
      "projectTitle":"Zerodha Clone",
      "techTools":["HTML", "CSS","Javascript"],
      "description":"A frontend-only Zerodha-inspired home page UI, designed with a clean, responsive layout to showcase a modern trading platform look and feel.",
      "link":"https://github.com/sprakash2006/Zerodha-clone"
    },
    {
      "id":5,
      "logo":"💰",
      "projectTitle":"Bank management system",
      "techTools":["C"],
      "description":"A menu-driven console application created to master C programming and file handling. It performs core banking tasks such as creating accounts, depositing/withdrawing funds, checking balances, transferring money, viewing/updating details, closing accounts, and listing all customers.",
      "link":"https://github.com/sprakash2006/Bank-Management-System"
    }
  ];

  return (
    <>
      {ProjectArray.map((proj)=>(
        <div className='proj-card'>
          <div className='proj-card-header'>
            <p className='proj-logo'>{proj.logo}</p>
            <p className='proj-title'>{proj.projectTitle}</p>
          </div>
          <div className='proj-content'>
            <p className='proj-description'>{proj.description}</p>
            <div className='proj-skill-section'>
              {
                proj.techTools.map((lang) => (
                  <>
                    <p className='proj-skill-capsule'>{lang}</p>
                  </>
                ))
              }
              <p className='proj-skill-capsule-link' onClick={() => window.open(proj.link, '_blank')}>🔗</p>
            </div>
          </div>
        </div>      
      ))}
    </>
  )
}

export default ProjectCard;
