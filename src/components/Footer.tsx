import React from 'react'
import About from './About'
import Contact from './Contact'
import Quicklinks from './Quicklinks'
import { FooterSection } from '../atoms/StyledFooter'



function Footer() {
  return (
    <FooterSection>
      <About />
      <Quicklinks />
      <Contact />
    </FooterSection>
  )
}

export default Footer