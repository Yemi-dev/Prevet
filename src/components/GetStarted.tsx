import React, { useState} from 'react'
import axios from 'axios';
import { ModalContactStyles } from '../atoms/StyledLandingPage';
import { StyledButton } from '../atoms/StyledButtons'
import { Radio, RadioGroup, Stack, useToast } from '@chakra-ui/react';
import Loader from './Loader';


function GetStarted() {
    interface Event {
        target?: any;
        preventDefault() : void,
       
    }
    const successToast = useToast();
    const failedToast = useToast();
    // const [response, setResponse] = useState<string>('')
    const [isSubmitted, setisSubmitted] = useState<boolean>(false)
    const [isLoading, setisLoading] = useState(false)
    const [values, setValues] = useState({
        email: '',
        message: ''
    })
    const [radio, setRadio] = useState('Brand-Owner')

    const handleSubmit = (e: Event) => {
        e.preventDefault();
        setisSubmitted(true)
        setisLoading(true)
        const formData = {
            user_type : radio,
            email : values.email,
            message : values.message
        }
        // const config = {     
        //     headers: { 'content-type': 'multipart/form-data' }
        // }
        // let formData = new FormData()
        // formData.append('user_type', radio)
        // formData.append('email', values.email)
        // formData.append('message', values.message)
        console.log(formData)
        axios.post('https://prevet.herokuapp.com/api/v1/info', formData ).then(function(response){
            console.log(response, formData);
            setisLoading(false)
            successToast({
                title: 'Succesful',
                description: "Your request will be processed.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
            })
            .catch(function (error) {
              console.log(error, formData);
              setisLoading(false)
              failedToast({
                title: 'Request Failed.',
                description: "Please try again.",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
            });

        // setTimeout(()=>{
        //     setResponse('')
        // }, 3000)
        // setResponse('Your message has been sent')
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
        setRadio('Brand-Owner')
       setisSubmitted(false)
    }

  return (
   <ModalContactStyles>
    <h5>Get Started with Prevet!</h5>
    <div className="border-highlight"></div>
    {/* <p className={response === '' ? 'contact-response' : 'contact-response bg'}>{response}</p> */}
    <form className="contact-form" onSubmit={handleSubmit}>
        <RadioGroup aria-required  onChange={setRadio} value={radio}>
      <Stack spacing={5} direction='column'>
        <Radio colorScheme='orange' value='Individual'>
        <p style={{color: '#CCCCCC', marginBottom:'0', fontSize:'.7rem' , fontWeight:'600'}}>Individual</p>
        </Radio>
        <Radio colorScheme='orange' value='Brand-Owner'>
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
    {isLoading && <Loader />}
   </ModalContactStyles>
  )
}

export default GetStarted