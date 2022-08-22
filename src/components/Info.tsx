import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../assets/SVG/facebook.svg'
import instagram from '../assets/SVG/instagram.svg'
import google from '../assets/SVG/google.svg'
import twitter from '../assets/SVG/twitter.svg'
import linkedin from '../assets/SVG/linkedin.svg'
import { InfoSection } from '../atoms/StyledLandingPage'

function Info(props: any) {
  return (
   <InfoSection className={props.className}>
    <h2>Reach Out To Us On</h2>
    <p>Raach out to us on our social media platforms </p>
    <div className="socials-icons">
        <a href='/' target='_blank'><img src={facebook} alt="icon" /></a>
        <a href='https://instagram.com/prevets_com?igshid=YmMyMTA2M2Y=' target='_blank'><img src={instagram} alt="icon" /></a>
        <a href='https://twitter.com/Prevets_com?s=20&t=z0Hy4kOb1lk0CaIx70fc6w' target='_blank'><img src={twitter} alt="icon" /></a>
        <a href='/' target='_blank'><img src={google} alt="icon" /></a>
        <a href='https://www.linkedin.com/company/prevets/' target='_blank'><img src={linkedin} alt="icon" /></a>
        
    </div>
   </InfoSection>
  )
}

export default Info