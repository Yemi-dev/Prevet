import React from 'react'
import { Link, NavLink} from 'react-router-dom'
import logo from "../assets/SVG/logo.svg"
import menu from "../assets/SVG/menu.svg"
import { StyledButtonLinks } from '../atoms/StyledButtons'
import { StyledHeader } from '../atoms/StyledHeaders'

function Header(props: any) {

  return (
      <StyledHeader className={props.className}>
        <Link to='/' className='logo-group'>
          <img src={logo} alt="logo" />
        </Link>
        <div className='header-links'>
        <StyledButtonLinks>
          <Link to="/Post">Order Inspection</Link>
        </StyledButtonLinks>
        <div className='navigation-group'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Request"> Request Call </NavLink>
          <NavLink to="/Call"> Call Us</NavLink>
          <NavLink to="/Faq">FAQs</NavLink>
          {/* <NavLink to="/Contact-us">Contact Us</NavLink> */}
        </div>
        </div>
        <div className="menu-group">
            <img src={menu} alt="icon" onClick={props.onClick}/>
        </div>
      </StyledHeader>
  )
}

export default Header