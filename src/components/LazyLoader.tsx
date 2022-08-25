import React from 'react'
import loader from '../assets/SVG/loader.svg'
import styled from 'styled-components'

const LoaderStyles = styled.div`
   height: 100vh;
   background-color: white
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   img{
    width: 100px;
   }
`

function LazyLoader() {
  return (
    <LoaderStyles>
        <img src={loader} alt="loading..." />
    </LoaderStyles>
  )
}

export default LazyLoader