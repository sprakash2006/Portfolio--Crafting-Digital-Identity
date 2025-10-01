import React, { useState } from 'react'
import './ProjectCard.css'

const ProjectCard = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const tabs = ["ALL", "WEBSITE", "Data Structure", "MACHINE LEARNING", "MOBILE APPS", "IOT"];

  const ProjectArray = [
    {
      id: 1,
      logo: "👤",
      projectTitle: "My-portfolio",
      techTools: ["React", "Tailwind"],
      description: "Showcases my skills, projects, and experience with smooth navigation, interactive components, and optimized performance across all devices.",
      link: "https://github.com/sprakash2006/portfolio",
      type: ["WEBSITE"]
    },
    {
      id: 2,
      logo: "💰",
      projectTitle: "Career Craftly - Student Club",
      techTools: ["React", "Firebase", "TailwindCss"],
      description: "It is a website that showcases the club’s activities, members, and updates, while enabling students to join and admins to manage content dynamically.",
      link: "https://github.com/sprakash2006/C2C--Student-Community-Club.git",
      type: ["WEBSITE"]
    },
    {
      id: 3,
      logo: "💰",
      projectTitle: "AyurSutra - Center Management",
      techTools: ["React", "Supabase", "TailwindCss", "Express"],
      description: "Manage appointments, schedule therapies, track patient progress, and maintain secure digital records—all from the center’s website. Ensure smooth, personalized care for every patient.",
      link: "https://github.com/sprakash2006/AyurSutra-Center.git",
      type: ["WEBSITE"]   // 🔹 Multiple categories
    },
    {
      id: 4,
      logo: "💰",
      projectTitle: "AyurSutra - User Management",
      techTools: ["React", "Supabase", "TailwindCss", "Express"],
      description: "A responsive platform for patients to book Panchakarma therapies, track progress, receive notifications and access resources.",
      link: "https://github.com/sprakash2006/Ayursutra-User.git",
      type: ["WEBSITE"]   // 🔹 Multiple categories
    },
    {
      id: 5,
      logo: "🎮",
      projectTitle: "Game-mania",
      techTools: ["Python", "Pygame"],
      description: "A set of classic and arcade-style games built with Python and Pygame, including Brickout, Flappy Bird, Shooter, Snake, and Tic Tac Toe.",
      link: "https://github.com/sprakash2006/Game-Mania",
      type: ["Data Structure"] // 🔹 Multiple
    },
    {
      id: 6,
      logo: "💰",
      projectTitle: "Bank management system",
      techTools: ["C", "Console"],
      description: "A menu-driven console application created to master C programming and file handling. It performs core banking tasks.",
      link: "https://github.com/sprakash2006/Bank-Management-System",
      type: ["Data Structure"]
    }
  ];

  // ✅ Filtering Logic
  const filteredProjects =
    activeTab === "ALL"
      ? ProjectArray
      : ProjectArray.filter(proj => proj.type.includes(activeTab));

  return (
    <>
      {/* 🔹 Tabs Section */}
      <div className="proj-tabs">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`proj-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 🔹 Projects Section */}
      <div className="proj-container">
        {filteredProjects.map(proj => (
          <div key={proj.id} className='proj-card'>
            <div className='proj-card-header'>
              <p className='proj-title'>{proj.projectTitle}</p>
              <p
                className='proj-skill-capsule-link-url'
                onClick={() => window.open(proj.link, '_blank')}
              >
                🔗
              </p>
            </div>
            <div className='horizantal-line'> </div>
            <div className='proj-content'>
              <p className='proj-description'>{proj.description}</p>
              <div className='proj-skill-section'>
                {proj.techTools.map((lang, i) => (
                  <p key={i} className='proj-skill-capsule'>{lang}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProjectCard;
