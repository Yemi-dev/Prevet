import React from 'react'
import About from './About'
import Contact from './Contact'
import Quicklinks from './Quicklinks'
import Info from './Info'
import { FooterSection } from '../atoms/StyledFooter'



function Footer(props: any) {
  return (
    <FooterSection className={props.className}>
      <About />
      <Quicklinks />
      <Info />
      {/* <Contact /> */}
    </FooterSection>
  )
}

export default Footer