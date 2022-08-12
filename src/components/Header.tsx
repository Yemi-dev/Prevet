import React from 'react'
import { Link, NavLink} from 'react-router-dom'
import logo from "../assets/SVG/logo.svg"
import { StyledButtonLinks } from '../atoms/StyledButtons'
import { StyledHeader } from '../atoms/StyledHeaders'

function Header() {

  return (
      <StyledHeader>
        <div className='logo-group'>
          <img src={logo} alt="logo" />
        </div>
        <div className='header-links'>
        <StyledButtonLinks>
          <Link to="/">Post a Request</Link>
        </StyledButtonLinks>
        <div className='navigation-group'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Request"> Request Call </NavLink>
          <NavLink to="/Call"> Call Us</NavLink>
          <NavLink to="/Faq">FAQs</NavLink>
          <NavLink to="/Contact us">Contact Us</NavLink>
        </div>
        </div>
        
      </StyledHeader>
  )
}

export default Header