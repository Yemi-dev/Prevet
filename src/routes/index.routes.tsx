import React from 'react'
import styled from 'styled-components'
import Home from "../pages/Home"

const Container = styled.div`
  background-color: white;
`

const IndexRoutes = () => {
  return (
    <Container>
      <Home />
    </Container>
  )
}

export default IndexRoutes