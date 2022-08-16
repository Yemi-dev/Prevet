import React from 'react'
import * as Yup from 'yup'
import { InputGroup } from 'react-bootstrap'
import { Card } from '../atoms/StyledLandingPage'
import styled from 'styled-components'
import { useFormik } from 'formik'
import { StyledButton } from '../atoms/StyledButtons'

const PRStyles = styled.div`
  background-color: #FDF1F3;
  padding: 3rem 2rem; 
  .PR-card{
    width: 70%;
    padding: 0 3rem;
    background-color: white;
    border: none;
    h2{
      font-size: 2rem;
      font-weight: 600;
      margin: 1rem auto;
    }
    form{
      width: 100%;
      .btn-group{
        width: 100%;
        text-align: center;
        margin: 2rem auto;
      }
      .input-group{
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 1rem 0;
        .errorText{
          color: red;
          font-size: .5rem;
        }
        input, textarea{
         background-color:  #EFF2F9;
         padding: .5rem;
         margin-top: .5rem;
         border-radius: 5px;
         &.error{
          border: 1px solid red;
         }
         &::placeholder{
          font-size: .7rem;
       }
        }
      }
      .mini-input-group{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px 0px; 
        .input-group{
          width: 48%;
          input{
            border-radius: 5px;
            &.error{
              border: 1px solid red;
             }
             &::placeholder{
              font-size: .7rem;
           }
          }
        }
      }
    }
   
  }
  @media (max-width:990px){
    .PR-card{
      width: 80%;
      padding: 1rem;
    }
  }
  @media (max-width:768px){
    .PR-card{
      width: 80%;
      form{
        .mini-input-group{
          flex-direction: column;
          .input-group{
            width: 100%;
          }
        }
      }
    }
  }
  @media (max-width:560px){
    .PR-card{
      width: 100%;
      h2{
        font-size: 1.5rem;
      }
      form{
        .btn-group{
          button{
            font-size: .7rem;
          }
        }
        .mini-input-group{
          flex-direction: column;
          .input-group{
            width: 100%;
          }
        }
      }
    }
  }

`
function PostRequest() {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const fullNameRegex = /^[a-z ,.'-]+$/i

  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      phone:'',
      requestTitle:'',
      description:'',
      carSpec:'',
      carLink:'',
      brandPhone:'',
      vetAddress:'',
      image: ''
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
      phone: Yup.string()
              .matches(phoneRegExp, 'Phone number is not valid')
              .label('Phone Number')
              .required(),
      requestTitle: Yup.string()
              .label('Request Title')
              .required(),
      description: Yup.string()
              .label('Description')
              .required(),
      carSpec: Yup.string()
              .label('Car Specificity')
              .required(),
      carLink: Yup.string()
              .url(),
      brandPhone: Yup.string()
              .matches(phoneRegExp, 'Phone number is not valid')
              .label('Phone Number')
              .required(),
      vetAddress: Yup.string()
              .label('Vetting Address')
              .required(),
    }),
    onSubmit: function (values, {resetForm}) {
      console.log(`You are registered! 
       Name: ${values.fullname}
       Email: ${values.email}
       Phone: ${values.phone}
       RequestTitle: ${values.requestTitle}
       Description: ${values.description}
       Car Specificity: ${values.carSpec}
       Car Link: ${values.carLink}
       BrandPhone: ${values.brandPhone}
       Vet Address: ${values.vetAddress}
       Image: ${values.image}
       `);
       resetForm();
    }
  })
  

  return (
    <PRStyles>
      <Card className='PR-card'>
        <h2>Post a request</h2>
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
            <label htmlFor="phone">
              Phone Number
            </label>
            <input
            className={formik.touched.phone && formik.errors.phone ? 'error' : ''}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone}
             type="tel" 
             name="phone"
             id="phone"
             placeholder="Enter your phone number"
             />
             {formik.touched.phone && formik.errors.phone && (
               <span className='errorText'>{formik.errors.phone}</span>
               )}
          </InputGroup>
          </div>
          <InputGroup className="input-group">
            <label htmlFor="requestTitle">
              Request Title
            </label>
            <input
            className={formik.touched.requestTitle && formik.errors.requestTitle ? 'error' : ''}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.requestTitle}
             type="text" 
             name="requestTitle"
             id="requestTitle"
             placeholder="Enter a title for your request..."
             />
             {formik.touched.requestTitle && formik.errors.requestTitle && (
               <span className='errorText'>{formik.errors.requestTitle}</span>
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
            <label htmlFor="carSpec">
              Car Specifications
            </label>
            <input
            className={formik.touched.carSpec && formik.errors.carSpec ? 'error' : ''}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.carSpec}
             type="text" 
             name="carSpec"
             id="carSpec"
             placeholder="Enter your car specifications..."
             />
              {formik.touched.carSpec && formik.errors.carSpec && (
               <span className='errorText'>{formik.errors.carSpec}</span>
               )}
          </InputGroup>
          <InputGroup className="input-group">
            <label htmlFor="carLink">
            Link to car you want to vet (optional)
            </label>
            <input
            className={formik.touched.carLink && formik.errors.carLink ? 'error' : ''}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.carLink}
             type="text" 
             name="carLink"
             id="carLink"
             placeholder=" Post a link to the car you want to vet..."
             />
              {formik.touched.carLink && formik.errors.carLink && (
               <span className='errorText'>{formik.errors.carLink}</span>
               )}
          </InputGroup>
          </div>
          <h3>Car Location</h3>
          <div className="mini-input-group">
          <InputGroup className="input-group">
            <label htmlFor="brandPhone">
              Phone Number
            </label>
            <input
            className={formik.touched.brandPhone && formik.errors.brandPhone ? 'error' : ''}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.brandPhone}
             type="tel" 
             name="brandPhone"
             id="brandPhone"
             placeholder="Enter your phone number"
             />
             {formik.touched.brandPhone && formik.errors.brandPhone && (
               <span className='errorText'>{formik.errors.brandPhone}</span>
               )}
          </InputGroup>
          <InputGroup className="input-group">
            <label htmlFor="vetAddress">
            Vetting Address
            </label>
            <input
             className={formik.touched.vetAddress && formik.errors.vetAddress ? 'error' : ''}
             onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.vetAddress}
             type="text" 
             name="vetAddress"
             id="vetAddress"
             placeholder="Enter car vetting address..."
             />
             {formik.touched.vetAddress && formik.errors.vetAddress && (
               <span className='errorText'>{formik.errors.vetAddress}</span>
               )}
          </InputGroup>
          </div>
          <InputGroup className="input-group">
            <label htmlFor="image">
            Attach an image (optional)
            </label>
            <input
            style={{fontSize: '.7rem'}}
             type="file"
             name='image'
             id='image'
             accept="image/png, image/jpeg, image/jpg"
             />
          </InputGroup>
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