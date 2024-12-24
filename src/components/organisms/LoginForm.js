import React from "react";
import FormGroup from "../molecules/FormGroup";
import "./LoginForm.css";

const LoginForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login form submitted");
  };

  return (
      <div className="login-form mx-auto mb-4">
        <FormGroup onSubmit={handleSubmit} />
      </div>
  );
};

export default LoginForm;
