import React, { useState} from 'react'
import { ModalContactStyles } from '../atoms/StyledLandingPage';
import { StyledButton } from '../atoms/StyledButtons'
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';


function GetStarted() {
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
    const [radio, setRadio] = useState('BrandOwner')

    const handleSubmit = (e: Event) => {
        e.preventDefault();
        setisSubmitted(true)
        console.log(radio,values)
        setTimeout(()=>{
            setResponse('')
        }, 3000)
        setResponse('Your message has been sent')
    }
    const handleChange = (e: Event): any => {
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
        setRadio('')
       setisSubmitted(false)
    }

  return (
   <ModalContactStyles>
    <h5>Get Started with Prevet!</h5>
    <div className="border-highlight"></div>
    <p className={response === '' ? 'contact-response' : 'contact-response bg'}>{response}</p>
    <form className="contact-form" onSubmit={handleSubmit}>
        <RadioGroup aria-required  onChange={setRadio} value={radio}>
      <Stack spacing={5} direction='column'>
        <Radio colorScheme='orange' value='Individual'>
        <p style={{color: '#CCCCCC', marginBottom:'0', fontSize:'.7rem' , fontWeight:'600'}}>Individual</p>
        </Radio>
        <Radio colorScheme='orange' value='BrandOwner'>
        <p style={{color: '#CCCCCC', marginBottom:'0', fontSize:'.7rem', fontWeight:'600'}}>Brand Owner</p>
        </Radio>
    </Stack>
    </RadioGroup>
         <p className='contact-title'>Send Us a message</p>
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
   </ModalContactStyles>
  )
}

export default GetStarted