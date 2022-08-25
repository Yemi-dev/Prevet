import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledButtonLinks } from '../atoms/StyledButtons'


const NotFoundStyles = styled.div`
   height: 100vh;
   background-color: white
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   h2{
    font-size: 1.5rem;
    font-weight: 600;
    margin: 2rem auto;
   }
`

const NotFound = () => {
  return (
   <NotFoundStyles>
    <h2>Page Not found</h2>
    <StyledButtonLinks>
      <Link to='/'>Return Home</Link>
    </StyledButtonLinks>
   </NotFoundStyles>
  )
}

export default NotFound