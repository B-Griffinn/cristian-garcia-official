import React from 'react';
import useForm from '../forms/useForm';
import "../forms/Form.css";
import validate from '../validation/validateInfo';

//This component holds all of the FORM inputs and actions and is displayed on the FORM componnet

const ContactForm = ({ submitForm }) => {


    const { handleChange, handleSubmit, values, errors } = useForm(
      submitForm,
      validate
    );
  
    return (
      <div className='form-container'>
        <form onSubmit={handleSubmit} className='form' noValidate>
          <h1>
            Get started with us today! Create your account by filling out the
            information below.
          </h1>
          <div className='form-inputs'>
            <label className='form-label'>Name</label>
            <input
              className='form-input'
              type='text'
              name='name'
              placeholder='Enter your name'
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Email</label>
            <input
              className='form-input'
              type='email'
              name='email'
              placeholder='Enter your email'
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>

          <div className='form-inputs'>
            <label className='form-label'>message</label>
            <textarea
              className='form-input'
              type='text'
              name='message'
              placeholder='Enter your message'
              value={values.message}
              onChange={handleChange}
            />
            {errors.message && <p>{errors.message}</p>}
          </div>

          <button className='form-input-btn' type='submit'>
            send
          </button>
        </form>
      </div>
    );
  };
  
  export default ContactForm;
