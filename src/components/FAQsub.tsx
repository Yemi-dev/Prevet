import React, { useState } from 'react'
import arrowDown from '../assets/SVG/arrowDown.svg'
import arrowUp from '../assets/SVG/arrowUp.svg'
import { FAQGroup } from '../atoms/StyledLandingPage'



interface FaqGroupProps {
    question: string;
    response: string;
}

function FAQsub(props: FaqGroupProps) {
    const [openFaq , setOpenFaq] = useState<boolean>(false);
    const id = Math.random().toString(16)

    const handleClick = () => {
        setOpenFaq(!openFaq);
    }

    

  return (
    <FAQGroup>
        <div className='faqs'>
        <p className='question'>{props.question}</p>
            <img className='faq-icon' src={openFaq ? arrowUp : arrowDown} alt="icon" onClick={handleClick}/>
        </div>
        {openFaq && <p className='response'>{props.response}</p>}
        <hr />
    </FAQGroup>
  )
}

export default FAQsub