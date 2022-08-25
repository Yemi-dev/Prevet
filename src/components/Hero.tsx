import React from 'react'
import { Link } from 'react-router-dom'
import { StyledButtonLinks } from '../atoms/StyledButtons'
import HeroCard from './HeroCard'
import { HeroSection } from '../atoms/StyledLandingPage'



function Hero(props: any) {
  return (
    <HeroSection className={props.className}>
        <div className='before'>
        <div className='hl-group'>
            <div className='hl-sub-group'>
            <h1 className='hero-left'>Pre Purchase Car Inspection</h1>
            <p>Need a professional to check the engine record of any car for 5,000? <br />
               Get your pre-purchase car inspection today with Prevet. We're here to prevent you from buying substandards.</p>
            <div className='hl-links'>
            <StyledButtonLinks>
              <Link to="/Post">Order Inspection</Link>
            </StyledButtonLinks>
            {/* <StyledButtonLinks variant='primary'>
              <Link to="/Request"> Request a call</Link>
            </StyledButtonLinks> */}
            </div>
            </div>
        </div>
        {/* <HeroBannerBackground>
            <div className='hb'></div>
        </HeroBannerBackground> */}
        </div>
        <HeroCard/>
    </HeroSection>
  )
}

export default Hero