import React from 'react';
import { useState, useEffect } from 'react';
import success from '../../images/success.jpg';
import '../forms/Form.css';

const FormSuccess = () => {
  // check if image has loaded, if not trigger loader
    const [loades, setLoaded] = useState(false);
    const successImg = success;

    useEffect(() => {
      setLoaded(true)
      console.log("USE EFFECT")
    }, [successImg])

  return (
    <div className='success-wrapper'>
      <h1 className='form-success'>We have received your request!</h1>
      {
        loades === false ?
        <div className="img-loader">
          <h1
            className="form-success"
          >LOADING</h1>
        </div>
        : (
          <img className='success-img' src={success} alt='success' />
        )
      }
     
    </div>
  );
};

export default FormSuccess;