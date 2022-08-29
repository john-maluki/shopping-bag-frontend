import React, { useState } from "react";
import Joi from "joi";
import {
  formValidate,
  formValidateProperty,
} from "../../validation/validateForm";
import { registerUser } from "../../services/userService";
import SavingIndicator from "../utils/SavingIndicator";
import { useNavigate } from "react-router-dom";

const Register = ({ togglePane }) => {
  const [sending, setSending] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: "",
    password_confirmation: "",
  });
  const [formErrors, setFormErrors] = useState({});
  let navigate = useNavigate();

  const schema = {
    username: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Username"),
    password: Joi.string().min(5).required().label("Password"),
    password_confirmation: Joi.string()
      .min(5)
      .required()
      .valid(Joi.ref("password"))
      .label("Password Confirmation"),
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors || {});
    if (errors) {
      return;
    }

    // start registering

    setSending(true);
    setTimeout(async () => {
      try {
        const response = await registerUser(data.username, data.password);
        setSending(false);
        console.log(response.data);
        moveToFinalRegistration(response.data);
      } catch (err) {
        setSending(false);
        if (err.response && err.response.status === 400) {
          console.log(err.response.data);
        }
      }
    }, 500);
  };

  const moveToFinalRegistration = ({ id, username }) => {
    navigate("/final/registration", {
      state: { id: id, username: username },
      replace: true,
    });
  };

  const handleChange = (e) => {
    const errors = { ...formErrors };
    const errorMessage = validateProperty(e.currentTarget);
    if (errorMessage) {
      errors[e.currentTarget.name] = errorMessage;
    } else {
      delete errors[e.currentTarget.name];
    }
    const userCredentials = { ...data };
    userCredentials[e.currentTarget.name] = e.currentTarget.value;
    setData(userCredentials);
    setFormErrors(errors);
  };

  const validate = () => {
    return formValidate(schema, data);
  };

  const validateProperty = ({ name, value }) => {
    return formValidateProperty(name, value, schema);
  };

  return (
    <div className="showcase-form card">
      <h2>Register for more features</h2>
      <form onSubmit={handleRegistration}>
        <div className="form-control">
          <input
            type="email"
            value={data.username}
            name="username"
            onChange={handleChange}
            placeholder="Username"
          />
          {formErrors.username && (
            <div className="errors">{formErrors.username}</div>
          )}
        </div>
        <div className="form-control">
          <input
            type="password"
            value={data.password}
            name="password"
            onChange={handleChange}
            placeholder="Password"
          />
          {formErrors.password && (
            <div className="errors">{formErrors.password}</div>
          )}
        </div>
        <div className="form-control">
          <input
            type="password"
            value={data.password_confirmation}
            name="password_confirmation"
            onChange={handleChange}
            placeholder="Confirm Password"
          />
          {formErrors.password_confirmation && (
            <div className="errors">{formErrors.password_confirmation}</div>
          )}
        </div>
        {sending ? (
          <SavingIndicator title={"Registering"} />
        ) : (
          <input
            type="submit"
            value="Register"
            className="btn btn-primary"
            disabled={validate()}
          />
        )}
      </form>
      <div className="login-if-account">
        <p>You have an account?</p>
        <p onClick={togglePane}>Login</p>
      </div>
    </div>
  );
};

export default Register;
