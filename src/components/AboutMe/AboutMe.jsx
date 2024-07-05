import React from "react";
import IMGmyphoto from "../../assets/imgs/me.jpg"; 
import MailIcon from "../../assets/imgs/mail-icon.png";
import LinkedinIcon from "../../assets/imgs/linkedin-icon.png";
import WppIcon from "../../assets/imgs/wpp-icon.png";
import GitHubIcon from "../../assets/imgs/github-icon.png";
import "./MediaQueries.css";


const AboutMe = () => {

  
        const redirectToEmail = () => {
            window.location.href = 'mailto:heloisacativo@gmail.com';
        };
    
        const redirectToLinkedin = () => {
            window.open('https://www.linkedin.com/in/helenacativo/', '_blank');
        };
    
        const redirectToWhatsapp = () => {
            const phoneNumber = '5592984788147';
            const whatsappLink = `https://wa.me/${phoneNumber}`;
            window.open(whatsappLink, '_blank');
    
        }

        const redirectToGitHub = () => {
            windows.open('https://github.com/heloisacativo/', '_blank');
        }
     
    return (
        
        <div className="aboutContainer">
        <img src={IMGmyphoto} alt="Minha foto"/>  
        <h2>Sou Heloisa, estudante de Engenharia de Software e explorando o mundo da tecnologia</h2>      
        
        <div className="contactContainer">
        <img src={MailIcon} alt="Email Icon" onClick={redirectToEmail}/>
        <img src={LinkedinIcon} alt="Linkedin Icon" onClick={redirectToLinkedin}/>   
        <img src={WppIcon} alt="Wpp Icon" onClick={redirectToWhatsapp}/>
        <img src={GitHubIcon} alt="GitHub Icon" onClick={redirectToGitHub}/>
        </div>
        </div>
    )
}

export default AboutMe;