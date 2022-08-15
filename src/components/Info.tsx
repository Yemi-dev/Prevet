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
        <Link to='/' target='_blank'><img src={facebook} alt="icon" /></Link>
        <Link to='/' target='_blank'><img src={instagram} alt="icon" /></Link>
        <Link to='/' target='_blank'><img src={twitter} alt="icon" /></Link>
        <Link to='/' target='_blank'><img src={google} alt="icon" /></Link>
        <Link to='/' target='_blank'><img src={linkedin} alt="icon" /></Link>
        
    </div>
   </InfoSection>
  )
}

export default Info