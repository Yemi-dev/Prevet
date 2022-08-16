import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from "../assets/SVG/logo.svg"
import close from "../assets/SVG/close.svg"
import { StyledButtonLinks } from '../atoms/StyledButtons'

const MHStyles = styled.div`
  display: none;
  position: absolute;
  transform: translateX(1000px);
  transition: all 500ms ease-in-out;
  &.open{
    transform:translateX(0px);
    background-color: #FDE5E9;
    height: 100vh;
    width: 75vw;
    z-index: 10;
    flex-direction: column;
    align-items: center;
    top: 0;
    right: 0;
    padding: 2rem;

    .logo-group{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo{
        width: 70px;
      }
    }
    .mobile-header-links{
      height: 70vh;
      display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      .navigation-group{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        a{
          text-decoration: none;
          margin: .5rem auto;
          color: #555555;
          font-size: .8rem;
          &.active{
            color: black;
            font-weight: 600;
          }
        }
      }
      div{
        margin-top: 2rem;
        a{
          padding: .5rem 1.5rem;
          font-size: .8rem
        }
      }
    }
  }
  .logo-group{
    display: none;
  }
  .mobile-header-links{
    display: none;
  }
 

  

  @media (max-width: 768px){
    display: flex;
  }

`

function Mobileheader(props: any) {
  const openMenu = props.showMenu
  return (
  <MHStyles className={openMenu ? 'open' : ''}>
     <div className='logo-group'>
          <img className='logo' src={logo} alt="logo" />
          <img src={close} alt="icon" onClick={props.onClick} />
     </div>
      <div className='mobile-header-links'>
        <div className='navigation-group'>
          <NavLink to="/" onClick={props.onClick}>Home</NavLink>
          <NavLink to="/Request" onClick={props.onClick}> Request Call </NavLink>
          <NavLink to="/Call" onClick={props.onClick}> Call Us</NavLink>
          <NavLink to="/Faq" onClick={props.onClick}>FAQs</NavLink>
          <NavLink to="/Contact-us" onClick={props.onClick}>Contact Us</NavLink>
        </div>
        <StyledButtonLinks>
          <Link to="/Post" onClick={props.onClick}>Post a Request</Link>
        </StyledButtonLinks>
      </div>
  </MHStyles>
  )
}

export default Mobileheader