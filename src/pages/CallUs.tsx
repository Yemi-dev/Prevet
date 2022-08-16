import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../atoms/StyledLandingPage'
import { StyledButtonLinks } from '../atoms/StyledButtons'
import call from '../assets/SVG/call.svg'
import chat from '../assets/SVG/chat.svg'
import styled from 'styled-components'

const CallSection = styled.div`
     width: 100%;
     padding: 2rem;
     background-color: #FDF1F3;
     .call-card{
        padding: 2rem 0;
        width: 70%;
        background-color: white;
        border: none;
        .contact-group, .contact-sub-group{
            display: flex;
            align-items: center;
        }
        .contact-group{
            width: 60%;
            margin: 2rem auto;
            justify-content: space-between;
            .contact-sub-group{
                justify-content: start;
                p{
                    color: black;
                }
            }
        }
        
        img{
            width: 50px;
            margin-right: 1rem;
        }
     }
     @media (max-width: 990px){
        .call-card{
            .contact-group{
                width: 90%;
            }
        }
     }
     @media (max-width: 768px){
        .call-card{
            .contact-group{
                width: 100%;
                flex-direction: column;
            }
        }
     }
     @media (max-width: 560px){
        .call-card{
            width: 100%;
            img{
                width: 30px;
            }
        }
        div{
            .contact-link{
                font-size: .7rem;
                padding: .5rem 1.5rem;
            }
        }
     }
`
function CallUs() {
  return (
    <CallSection>
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
                <Link className='contact-link' to='/Contact-us'>Contact us</Link>
            </StyledButtonLinks>
        </Card>
    </CallSection>
  )
}

export default CallUs