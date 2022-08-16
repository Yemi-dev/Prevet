import React from 'react'
import FAQ from '../components/FAQ'
import styled from 'styled-components'

export const FaqStyles = styled.div`
     .Faq-group{
        padding: 2rem 4rem;
        .faq-title{
            font-weight: 600;
        }
     }
`

function Faqs() {
  return (
    <FaqStyles>
        <FAQ className='Faq-group'/>
    </FaqStyles>
  )
}

export default Faqs