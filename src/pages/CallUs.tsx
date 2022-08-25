import React from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { Card } from '../atoms/StyledLandingPage'
import { StyledButtonLinks } from '../atoms/StyledButtons'
import call from '../assets/SVG/call.svg'
import chat from '../assets/SVG/chat.svg'
import { CallSection } from '../atoms/StyledLandingPage'


function CallUs() {
    const showMenu = useOutletContext()
  return (
    <CallSection className={showMenu ? 'open' : ''}>
        <Card className='call-card'>
            <h4>Give Us a Call:</h4>
            <div className='contact-group'>
                <a href="tel:+234906 682 1545" className='contact-sub-group' >
                    <img src={call} alt="call" />
                    <p>+234906 682 1545</p>
                </a>
                <a  href="http://" target='_blank' className='contact-sub-group'>
                    <img src={chat} alt='whatsapp' />
                   <p >+234906 682 1545</p>
                </a>
            </div>
            <StyledButtonLinks>
                <Link className='contact-link' to='/Contact-us'>Become an Agent</Link>
            </StyledButtonLinks>
        </Card>
    </CallSection>
  )
}

export default CallUs