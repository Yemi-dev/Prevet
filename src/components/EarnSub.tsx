import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledButtonLinks } from '../atoms/StyledButtons'
import { EarnSubSection } from '../atoms/StyledLandingPage'
import star from "../assets/SVG/star.svg"



function EarnSub() {
  return (
    <EarnSubSection>
        <div className="earn-right">
            <h2>What you need to earn</h2>
            <div className="earn-highlights">
                <img src={star} alt="star" />
                <p>A professional ID card </p>
            </div>
            <div className="earn-highlights">
                <img src={star} alt="star" />
                <p>Tools for testing</p>
            </div>
            <div className="earn-highlights">
                <img src={star} alt="star" />
                <p>An iPhone or Android device </p>
            </div>
            <div className="earn-highlights">
                <img src={star} alt="star" />
                <p>A way to move around</p>
            </div>
            <div className="earn-highlights">
                <img src={star} alt="star" />
                <p>Sign up </p>
            </div>
            
            <StyledButtonLinks>
                <Link to="/"> Get Started</Link>
            </StyledButtonLinks>
        </div>
        <div className="earn-banner"></div>
    </EarnSubSection>
  )
}

export default EarnSub