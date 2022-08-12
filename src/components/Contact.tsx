import React, { useState} from 'react'
import { ContactStyles } from '../atoms/StyledFooter';
import { StyledButton } from '../atoms/StyledButtons'


function Contact() {
    interface Event {
        target?: any;
        preventDefault() : void,
       
    }

    const [response, setResponse] = useState<string>('')
    const [isSubmitted, setisSubmitted] = useState<boolean>(false)
    const [values, setValues] = useState({
        email: '',
        message: ''
    })

    const handleSubmit = (e: Event) => {
        e.preventDefault();
        setisSubmitted(true)
        setTimeout(()=>{
            setResponse('')
        }, 3000)
        setResponse('Your message has been sent')
    }
    const handleChange = (e: Event) => {
        const {value, name} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    if(isSubmitted){
        setValues({
            email: '',
            message: ''
        })
       setisSubmitted(false)
    }

  return (
   <ContactStyles>
    <h5>Contact Us</h5>
    <div className="border-highlight"></div>
    <p className={response === '' ? 'contact-response' : 'contact-response bg'}>{response}</p>
    <form className="contact-form" onSubmit={handleSubmit}>
         <p>Send Us a message</p>
        <div className="input-group">
        <input 
        type='email'
        name='email'
        placeholder='Enter your email address...'
        value={values.email}
        onChange= {handleChange}
        required/>
        </div>
        <div className="textarea-group">
        <textarea 
        name='message'
         placeholder='Enter your message...' 
         cols={5} rows={5}
         value={values.message}
         onChange= {handleChange}
         required/>
         
        </div>
        <StyledButton type='submit'>Send Message</StyledButton>
    </form>
   </ContactStyles>
  )
}

export default Contact