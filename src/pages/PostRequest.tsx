import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import axios from 'axios'
import { useToast } from '@chakra-ui/react'
import { InputGroup } from 'react-bootstrap'
import { Card } from '../atoms/StyledLandingPage'
import { useFormik } from 'formik'
import { PRStyles } from '../atoms/StyledLandingPage'
import { StyledButton } from '../atoms/StyledButtons'
import { useOutletContext } from 'react-router-dom'
import attachment from '../assets/SVG/attachment.svg'
import Loader from '../components/Loader'

const imageMimeType = /image\/(png|jpg|jpeg)/i;

function PostRequest() {
   const showMenu = useOutletContext()
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const fullNameRegex = /^[a-z ,.'-]+$/i
  const successToast = useToast();
  const failedToast = useToast();
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
  const [isLoading, setisLoading] = useState(false)
  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
    formik.setFieldValue('image', file);
  }
  useEffect(() => {
    let fileReader: FileReader, isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result)
        }
      }
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    }

  }, [file]);


  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      phone_number:'',
      title:'',
      description:'',
      car_specification:'',
      link:'',
      car_phone_number:'',
      car_address:'',
      image: '',
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
              .label('Request Title')
              .required(),
      description: Yup.string()
              .label('Description')
              .required(),
      car_specification: Yup.string()
              .label('Car Specificity')
              .required(),
      link: Yup.string()
              .url()
              .label('Link to car'),
      car_phone_number: Yup.string()
              .matches(phoneRegExp, 'Phone number is not valid')
              .label('Phone Number')
              .required(),
      car_address: Yup.string()
              .label('Vetting Address')
              .required(),
      image: Yup.string(),
    }),
    onSubmit: function (values, {resetForm}) {
      setisLoading(true)
      let formData = new FormData();   
      const config = {     
        headers: { 'content-type': 'multipart/form-data' }
    }
    

      formData.append('fullname', values.fullname);  
      formData.append('email', values.email);  
      formData.append('phone_number', values.phone_number);  
      formData.append('title', values.title);  
      formData.append('description', values.description);  
      formData.append('car_specification', values.car_specification);  
      formData.append('link', values.link);  
      formData.append('car_phone_number', values.car_phone_number);  
      formData.append('car_address', values.car_address);  
      formData.append('image', values.image);  

       axios.post('https://prevet.herokuapp.com/api/v1/vet/request',
       formData, config)
      .then(function (response) {
        console.log(response, formData);
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
      
      resetForm();
      setFileDataURL(null);
    }
  })

 
  

  return (
    <PRStyles className={showMenu ? 'open' : ''}>
      <Card className='PR-card'>
        <h2>Post a request</h2>
        <form encType='multipart/form-data' onSubmit={formik.handleSubmit}>
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
              Request Title
            </label>
            <input
            className={formik.touched.title && formik.errors.title ? 'error' : ''}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.title}
             type="text" 
             name="title"
             id="title"
             placeholder="Enter a title for your request..."
             />
             {formik.touched.title && formik.errors.title && (
               <span className='errorText'>{formik.errors.title}</span>
               )}
          </InputGroup>
          <InputGroup className="input-group">
            <label htmlFor="description">
              Description
            </label>
            <textarea
            className={formik.touched.description && formik.errors.description ? 'error' : ''}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.description}
             name="description"
             id="description"
             placeholder="Enter a title for your request..."
             cols={5} rows={5}
             />
             {formik.touched.description && formik.errors.description && (
               <span className='errorText'>{formik.errors.description}</span>
               )}
          </InputGroup>
          <div className="mini-input-group">
          <InputGroup className="input-group">
            <label htmlFor="car_specification">
              Car Specifications
            </label>
            <input
            className={formik.touched.car_specification && formik.errors.car_specification ? 'error' : ''}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.car_specification}
             type="text" 
             name="car_specification"
             id="car_specification"
             placeholder="Enter your car specifications..."
             />
              {formik.touched.car_specification && formik.errors.car_specification && (
               <span className='errorText'>{formik.errors.car_specification}</span>
               )}
          </InputGroup>
          <InputGroup className="input-group">
            <label htmlFor="link">
            Link to car you want to vet
            </label>
            <input
            className={formik.touched.link && formik.errors.link ? 'error' : ''}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.link}
             type="text" 
             name="link"
             id="link"
             placeholder=" Post a link to the car you want to vet..."
             />
              {formik.touched.link && formik.errors.link && (
               <span className='errorText'>{formik.errors.link}</span>
               )}
          </InputGroup>
          </div>
          <h3>Car Location</h3>
          <div className="mini-input-group">
          <InputGroup className="input-group">
            <label htmlFor="car_phone_number">
              Phone Number
            </label>
            <input
            className={formik.touched.car_phone_number && formik.errors.car_phone_number ? 'error' : ''}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.car_phone_number}
             type="tel" 
             name="car_phone_number"
             id="car_phone_number"
             placeholder="Enter your phone number"
             />
             {formik.touched.car_phone_number && formik.errors.car_phone_number && (
               <span className='errorText'>{formik.errors.car_phone_number}</span>
               )}
          </InputGroup>
          <InputGroup className="input-group">
            <label htmlFor="car_address">
            Vetting Address
            </label>
            <input
             className={formik.touched.car_address && formik.errors.car_address ? 'error' : ''}
             onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.car_address}
             type="text" 
             name="car_address"
             id="car_address"
             placeholder="Enter car vetting address..."
             />
             {formik.touched.car_address && formik.errors.car_address && (
               <span className='errorText'>{formik.errors.car_address}</span>
               )}
          </InputGroup>
          </div>
          <InputGroup className="input-group">
            <label htmlFor="image">
            Attach an image
            <img style={{width: '50px'}} src={fileDataURL} alt="" />
            <div className='img-picker'>
              <span>Choose a file </span>
              <img style={{width: '15px'}} src={attachment} alt="icon" />
            </div>
            </label>
           
            <input
            style={{fontSize: '.7rem', visibility: 'hidden'}}
             type="file"
             name='image'
             id='image'
             accept=".jpg, .jpeg, .png"
             onChange={e => {
              changeHandler(e);
             }}
             />
          </InputGroup>
          {isLoading && <Loader />}
          <div className="btn-group">
          <StyledButton type='submit'> 
            Proceed and Checkout to Payment
          </StyledButton>
          </div>
        </form>
      </Card>
    </PRStyles>
  )
}

export default PostRequest