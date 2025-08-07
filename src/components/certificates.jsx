import React from 'react';
import './certificates.css' 

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
        "logo":Udemy,
        "alt": "Full Stack Development Certificate",
        "prov": "Udemy"
    },
    {
        "name": "C",
        "src": c,
        "logo":Infosys,
        "alt": "Infosys C Programming Certificate",
        "prov": "Infosys Springboard"
    },
    {
        "name": "Prompt",
        "src": promptEngineering,
        "logo":LetsUpgrade,
        "alt": "Prompt Engineering Certificate",
        "prov": "LetsUpgrade"
    },
    {
        "name": "Git",
        "src": versionControl,
        "logo":Quark,
        "alt": "Git Version Control Certificate",
        "prov": "Quark Vit Pune"
    },
    {
        "name": "Figma",
        "src": figmaDesign,
        "logo":LetsUpgrade,
        "alt": "Figma Design Certificate",
        "prov":"LetsUpgrade"
    }
];

const Certificates = () => {
    return (
        <div className="certificates-container">
            {CerGallery.map((image, index) => (
                <div key={index} className="certificate-item">
                    <div className='certificate-item-header'>
                        <img className='prov-logo' src={image.logo} alt={image.prov} />
                        <span className='certificate-provider'>{image.prov}</span>
                    </div>
                    <img 
                        src={image.src} 
                        alt={image.alt}
                        className="certificate-image"
                    />
                </div>
            ))}
        </div>
    );
};

export default Certificates;