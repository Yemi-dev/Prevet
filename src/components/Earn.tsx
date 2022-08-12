import React from 'react'
import { Link } from 'react-router-dom'
import { StyledButtonLinks } from '../atoms/StyledButtons'
import { EarnSection } from '../atoms/StyledLandingPage'


function Earn() {
  return (
    <EarnSection>
        <div className="earn-banner"></div>
        <div className="earn-right">
            <h2>Earn with Us</h2>
            <p>Looking for a side hustle or a full time job? Prevet empowers professionals to earn extra cash on their own terms.
            <br />
            <br />
            Become our Agent and decide how much you want to earn.</p>
            <StyledButtonLinks>
                <Link to="/"> Become an Agent</Link>
            </StyledButtonLinks>
        </div>
    </EarnSection>
  )
}

export default Earn