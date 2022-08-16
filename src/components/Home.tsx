import React from 'react'
import Earn from './Earn'
import EarnSub from './EarnSub'
import FAQ from './FAQ'
import Hero from './Hero'
import { useOutletContext } from 'react-router-dom'

function Home() {
    const showMenu = useOutletContext()
  return (
    <>
    <Hero className={showMenu ? 'open' : ''}/>
    <Earn className={showMenu ? 'open' : ''} />
    <EarnSub className={showMenu ? 'open' : ''}/>
    <FAQ className={showMenu ? 'open' : ''}/>
    </>
  )
}

export default Home