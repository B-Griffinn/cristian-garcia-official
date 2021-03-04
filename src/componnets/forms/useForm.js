import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // store submission values in an array to easily loop and check for an empty field
    const submissionValues = Object.values(values);

    let emptyFields = 0;

    submissionValues.forEach((e) => {
      // store how many emptyFields fields there are
      // console.log("eeee", e);
      if (e === "") {
        emptyFields++;
      } else {
        // console.log("Missing Fields");
        return;
      }
    });

    // only send the email if you our emptyFields
    if (emptyFields > 0) {
      console.log("Please compelte the form");
    } else {
      sendEmail(e);
    }

    setValues({
      name: "",
      email: "",
      message: "",
    });

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors, isSubmitting, callback]);

  // EMAIL JS FUNCTIONALITY
  function sendEmail(e) {
    e.preventDefault();
    // console.log("Email Being Sent Your Way!!");
    emailjs
      .sendForm(
        "gmail_test",
        "contact_form",
        e.target,
        
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
