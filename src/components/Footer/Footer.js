import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Instragram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'
const Footer = () => {
  return (
      <div className="Footer-container">
        <hr/>
        <div className="footer">
            <div className="social-links">

           {/* GitHub icon with link to GitHub profile */}
           <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="GitHub" />
          </a>
          {/* Instagram icon with link to Instagram profile */}
          <a href="https://www.instagram.com/i__pranay35/" target="_blank" rel="noopener noreferrer">
            <img src={Instragram} alt="Instagram" />
          </a>
          {/* LinkedIn icon with link to LinkedIn profile */}
          <a href="https://www.linkedin.com/in/pranay-mangrudkar-a4736a1ba/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
            </div>
        <div className="logo-f">
            <img src={Logo} alt="" />
        </div>
        </div>
        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
      </div>
  )
}

export default Footer
