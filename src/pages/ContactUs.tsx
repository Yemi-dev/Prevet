import React, { useState } from 'react'
import axios from 'axios'
import { RCStyles } from '../atoms/StyledLandingPage'
import * as Yup from 'yup'
import { useToast } from '@chakra-ui/react'
import { InputGroup } from 'react-bootstrap'
import { Card } from '../atoms/StyledLandingPage'
import { useFormik } from 'formik'
import { StyledButton } from '../atoms/StyledButtons'
import { useOutletContext } from 'react-router-dom'
import Loader from '../components/Loader'

function ContactUs() {
    const showMenu = useOutletContext()
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const fullNameRegex = /^[a-z ,.'-]+$/i
    const successToast = useToast();
   const failedToast = useToast();
    const [isLoading, setisLoading] = useState(false)
    const formik = useFormik({
      initialValues: {
        fullname: '',
        email: '',
        phone_number:'',
        title:'',
      },
      validationSchema: Yup.object({
        fullname: Yup.string()
                .matches(fullNameRegex, 'Fullname is not valid')
                .label('Full Name')
                .required(),
        email: Yup.string()
                .email()
                .label('Email')
                .required(),
        phone_number: Yup.string()
                .matches(phoneRegExp, 'Phone number is not valid')
                .label('Phone Number')
                .required(),
        title: Yup.string()
                .label('Your Message')
                .required(),
      }),
      onSubmit: function  (values, {resetForm}) {
        setisLoading(true)

         axios.post(' https://prevet.herokuapp.com/api/v1/contact/call', values)
        .then(function (response) {
          console.log(response);
          setisLoading(false)
          successToast({
            title: 'Request Submitted.',
            description: "Your request will be processed.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        })
        .catch(function (error) {
          console.log(error);
          setisLoading(false)
          failedToast({
            title: 'Request Failed.',
            description: "Please try again.",
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        });
         resetForm();
      }
    })

  return (
    <RCStyles className={showMenu ? 'open' : ''}>
    <Card className='PR-card'>
    <h2>Contact Us</h2>
    <form onSubmit={formik.handleSubmit}>
      <InputGroup className="input-group">
        <label htmlFor="fullname">
          Full Name
        </label>
        <input
        className={formik.touched.fullname && formik.errors.fullname ? 'error' : ''}
        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.fullname}
         type="text" 
         name="fullname"
         id="fullname"
         placeholder="Enter your full names here..."
         />
          {formik.touched.fullname && formik.errors.fullname && (
           <span className='errorText'>{formik.errors.fullname}</span>
           )}
      </InputGroup>
      <div className="mini-input-group">
      <InputGroup className="input-group">
        <label htmlFor="email">
          Email Address
        </label>
        <input
         className={formik.touched.email && formik.errors.email ? 'error' : ''}
         onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}
         type="email" 
         name="email"
         id="email"
         placeholder="Enter your email address..."
         />
         {formik.touched.email && formik.errors.email && (
           <span className='errorText'>{formik.errors.email}</span>
           )}
      </InputGroup>
      <InputGroup className="input-group">
        <label htmlFor="phone_number">
          Phone Number
        </label>
        <input
        className={formik.touched.phone_number && formik.errors.phone_number ? 'error' : ''}
        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone_number}
         type="tel" 
         name="phone_number"
         id="phone_number"
         placeholder="Enter your phone number"
         />
         {formik.touched.phone_number && formik.errors.phone_number && (
           <span className='errorText'>{formik.errors.phone_number}</span>
           )}
      </InputGroup>
      </div>
      <InputGroup className="input-group">
        <label htmlFor="title">
          Your Message
        </label>
        <textarea
        className={formik.touched.title && formik.errors.title ? 'error' : ''}
        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.title}
         name="title"
         id="title"
         placeholder="Enter your message here..."
         cols={5} rows={5}
         />
         {formik.touched.title && formik.errors.title && (
           <span className='errorText'>{formik.errors.title}</span>
           )}
      </InputGroup>
      {isLoading && <Loader />}
      <div className="btn-group">
      <StyledButton type='submit'> 
        Submit
      </StyledButton>
      </div>
    </form>
  </Card>
</RCStyles>
  )
}

export default ContactUs