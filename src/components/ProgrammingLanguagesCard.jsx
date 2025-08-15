import React from 'react';
import './ProgrammingLanguagesCard.css';
import { memo } from 'react';


const SkillCard = memo(({ category, icon, skills }) => (
  <div className="lang-skill-card">
    <div className="lang-card-header">
      <span className="lang-card-icon">{icon}</span>
      <h3 className="lang-card-title">{category}</h3>
    </div>
    <div className="lang-skills-grid">
      {skills.map((skill, index) => (
        <span key={`${category}-${index}`} className="lang-skill-tag">
          {skill}
        </span>
      ))}
    </div>
  </div>
));

SkillCard.displayName = 'SkillCard';

export default function ProgrammingLanguagesCard() {
   const skillsData1 = [
    {
      category: 'Programming Languages',
      icon: '>_',
      skills: ['C', 'C++', 'Javascript', 'Python',]
    },
    {
      category: 'Relevent Courses',
      icon: '🗂️',
      skills: ['Data Structure', 'Algorithms', 'OOPS', 'DBMS']
    },
    {
      category: 'Web Development',
      icon: '⚛️',
      skills: ['React', 'Tailwind CSS', 'HTML5', 'CSS', 'GSAP', 'Node.js', 'Express.js', 'REST APIs', 'Axios']
    },
    
    {
      category: 'Databases',
      icon: '🗂️',
      skills: ['MySQL', 'Firebase', 'PostgreSQL',]
    },
    {
      category: 'Tools & Technologies',
      icon: '⚙️',
      skills: ['Version Control', 'NPM', 'Postman', 'VS Code', 'Vite']
    },
    {
      category: 'Design',
      icon: '🎨',
      skills: ['Figma', 'Canva', 'UI/UX Design']
    }
  ];

  const skillsData2 = [

  ];

  const skillsData3 = [
    
  ];

  return (
    <div className="lang-dashboard-container">
      <div className="lang-skills-grid-container">
        {skillsData1.map((skillCategory) => (
          <SkillCard
            key={skillCategory.category}
            category={skillCategory.category}
            icon={skillCategory.icon}
            skills={skillCategory.skills}
          />
        ))}
      </div>
    </div>
  );
}