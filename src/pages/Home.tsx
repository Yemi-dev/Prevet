import React from 'react'
import styled from 'styled-components'
import Header from "../components/Header"
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Earn from '../components/Earn'
import EarnSub from '../components/EarnSub'
import FAQ from '../components/FAQ'
import Info from '../components/Info'

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1400px;
`


function Home() {
  return (
    <Container>
        <Header />
        <Hero />
        <Earn />
        <EarnSub />
        <FAQ />
        <Info />
        <Footer />
    </Container>
  )
}

export default Home