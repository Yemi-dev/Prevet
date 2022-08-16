import React from 'react'
import Earn from './Earn'
import EarnSub from './EarnSub'
import FAQ from './FAQ'
import Hero from './Hero'

interface OutletProps {
    className?: string;
  }

function Home(props: OutletProps) {
  return (
    <>
    <Hero className={props.className}/>
    <Earn className={props.className} />
    <EarnSub className={props.className}/>
    <FAQ className={props.className}/>
    </>
  )
}

export default Home