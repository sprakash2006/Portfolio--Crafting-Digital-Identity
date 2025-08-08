import React, { useState } from 'react';
import './certificates.css';

import fullStack from "../assets/certificateimg/full-stack.jpg"
import c from '../assets/certificateimg/infosys-c.jpg'
import promptEngineering from "../assets/certificateimg/prompt-up.jpg"
import versionControl from "../assets/certificateimg/version-control.jpg"
import figmaDesign from "../assets/certificateimg/figma-up.png"

import Udemy from '../assets/prov-logos/udemy.png'
import Infosys from '../assets/prov-logos/infosys.png'
import LetsUpgrade from '../assets/prov-logos/letsupgrade.png'
import Quark from '../assets/prov-logos/quark.png'

const CerGallery = [
    {
        "name": "Full Stack",
        "src": fullStack,
        "logo": Udemy,
        "alt": "Full Stack Web Development Certificate",
        "prov": "Udemy",
        "credentialUrl": "https://www.udemy.com/certificate/fullstack" // Add your actual URLs
    },
    {
        "name": "C",
        "src": c,
        "logo": Infosys,
        "alt": "C Programming Certificate",
        "prov": "Infosys Springboard",
        "credentialUrl": "https://infosys.com/certificate/c-programming"
    },
    {
        "name": "Prompt",
        "src": promptEngineering,
        "logo": LetsUpgrade,
        "alt": "Prompt Engineering Bootcamp Certificate",
        "prov": "LetsUpgrade",
        "credentialUrl": "https://letsupgrade.com/certificate/prompt-engineering"
    },
    {
        "name": "Git",
        "src": versionControl,
        "logo": Quark,
        "alt": "Git Version Control Certificate",
        "prov": "Quark Vit Pune",
        "credentialUrl": "https://quark.vit.edu/certificate/git"
    },
    {
        "name": "Figma",
        "src": figmaDesign,
        "logo": LetsUpgrade,
        "alt": "Figma Design Certificate",
        "prov": "LetsUpgrade",
        "credentialUrl": "https://letsupgrade.com/certificate/figma"
    }
];

const Certificates = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleCredentialClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div 
            className={`certificates-container-wrap ${isHovered ? 'paused' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="certificates-main-container">
                <div className="certificates-container1">
                    {CerGallery.map((image, index) => (
                        <div key={`first-${index}`} className="certificate-item">
                            <div className="certificate-image-container">
                                <img 
                                    src={image.src} 
                                    alt={image.alt}
                                    className="certificate-image"
                                />
                                <div className="credential-overlay">
                                    <button 
                                        className="credential-button"
                                        onClick={() => handleCredentialClick(image.credentialUrl)}
                                    >
                                        Credentials
                                        <span className="arrow">→</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Second set for seamless loop */}
                <div className="certificates-container2">
                    {CerGallery.map((image, index) => (
                        <div key={`second-${index}`} className="certificate-item">
                            <div className="certificate-image-container">
                                <img 
                                    src={image.src} 
                                    alt={image.alt}
                                    className="certificate-image"
                                />
                                <div className="credential-overlay">
                                    <button 
                                        className="credential-button"
                                        onClick={() => handleCredentialClick(image.credentialUrl)}
                                    >
                                        Credentials
                                        <span className="arrow">→</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certificates;