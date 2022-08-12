import React from 'react'
import styled from 'styled-components'
import Home from "../pages/Home"

const Container = styled.div`
  background-color: #FDF1F3;
`

const IndexRoutes = () => {
  return (
    <Container>
      <Home />
    </Container>
  )
}

export default IndexRoutes