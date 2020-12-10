import React from "react";
import { useState, useEffect } from "react";
import success from "../../images/success.jpg";
import "../forms/Form.css";

const FormSuccess = () => {
  return (
    <div className="success-wrapper">
      <h1 className="form-success">We have received your request!</h1>
    </div>
  );
};

export default FormSuccess;
