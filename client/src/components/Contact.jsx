import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import HeadingLayout from './Common/HeadingLayout'
import {handleHeading} from '../api'

export const Contact = () => {
  return (
    <div className='footer-max-width p-160 mx-auto padding-md p-sm-60' id='contact'>
       <div  className='container text-center '>
        <div className="row mb-5">
< HeadingLayout  id="5" handleHeading={handleHeading}/>
        </div>
        <div className="row mt-4">
        <Form className='input-group'>
            <Form.Control
              type='email'
              placeholder='Your Email'
              className='form-control rounded-0 custom-email-placeholder ' required
            />
            <Button
              variant='primary'
              type='submit'
              className='btn primary-background-color text-white rounded-0 btn-hover input-group-append'
            >
              Subscribe
            </Button>
          </Form>
        </div>
    </div>
    </div>
   
  )
}
