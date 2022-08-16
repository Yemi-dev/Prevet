import React from 'react'
import FAQ from '../components/FAQ'
import { FaqStyles } from '../atoms/StyledLandingPage'
import { useOutletContext } from 'react-router-dom'



function Faqs() {
    const showMenu = useOutletContext()
  return (
    <FaqStyles className={showMenu ? 'open' : ''} >
        <FAQ className='Faq-group'/>
    </FaqStyles>
  )
}

export default Faqs