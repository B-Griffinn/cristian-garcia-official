import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    sendEmail(e)
    setValues({
        name: '',
        email: '',
        message: ''
    })

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors, isSubmitting, callback]
  );

      // EMAIL JS FUNCTIONALITY
      function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail_test', 'contact_form', e.target, 'user_iHKbBGEc2ruGFHITfjH3o')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;