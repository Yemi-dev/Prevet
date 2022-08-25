import React from 'react'
import loader from '../assets/SVG/loader.svg'
import styled from 'styled-components'

const StyledLoader = styled.img`
    margin: 1rem auto;
`

function Loader() {
  return (
    <img src={loader} alt="loading..." />
  )
}

export default Loader