import React, { Children } from 'react'
import styled from 'styled-components'
import LandingPage from "../pages/LandingPage"

const Container = styled.div`
  background-color: white;
`

const IndexRoutes = (props: any) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default IndexRoutes