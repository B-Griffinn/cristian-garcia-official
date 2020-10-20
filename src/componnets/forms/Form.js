import React, { useState } from 'react'
import './Form.css';

import ContactForm from '../contact/ContactForm';
import FormSuccess from '../contact/FormSuccess';


// This component is rendered on the Contact Page under Pages
const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const submitForm = () => {
      setIsSubmitted(true);
    }

    const closeSuccess = () => {
        setIsSubmitted(false)
    }

    return (
      <>
          <div className='close-btn' onClick={closeSuccess}>×</div>
          {isSubmitted === false ? <ContactForm submitForm={submitForm} />
          : <FormSuccess />
          }
      </>
    );
  };
  
  export default Form;
