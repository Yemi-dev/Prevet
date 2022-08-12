import React from 'react'
import { AboutStyles } from '../atoms/StyledFooter'

function About() {
  return (
    <AboutStyles>
        <h5>About</h5>
        <div className="border-highlight"></div>
        <p className="about-texts">
        Prevet will connect you to a certified agent to vet and give you a real-time status of the condition of your item </p>
        <p className="about-texts">
        Prevet is dedicated to empowering people, communities and making life a lot easier.
        </p>
    </AboutStyles>
  )
}

export default About