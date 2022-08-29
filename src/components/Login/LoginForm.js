import React, { useState } from "react";
import Joi from "joi";
import { toast } from "react-toastify";
import {
  formValidate,
  formValidateProperty,
} from "../../validation/validateForm";
import { loginUser } from "../../services/userService";
import SavingIndicator from "../utils/SavingIndicator";

const LoginForm = ({ togglePane }) => {
  const [sending, setSending] = useState(false);
  const [data, setData] = useState({ username: "", password: "" });
  const [formErrors, setFormErrors] = useState({});

  const schema = {
    username: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Username"),
    password: Joi.string().required().label("Password"),
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors || {});
    if (errors) {
      return;
    }

    setSending(true);
    setTimeout(async () => {
      try {
        await loginUser(data.username, data.password);
        window.location = "/products";
        setSending(false);
      } catch (err) {
        setSending(false);
        if (err.response.status === 401 || err.response.status === 403) {
          toast.info("Username or Password error!");
        }
        console.log(err);
      }
    }, 100);
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
      <h2>Login for more features</h2>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <input
            type="email"
            name="username"
            value={data.username}
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
            name="password"
            onChange={handleChange}
            value={data.password}
            placeholder="Password"
          />
          {formErrors.password && (
            <div className="errors">{formErrors.password}</div>
          )}
        </div>
        {sending ? (
          <SavingIndicator title={"login"} />
        ) : (
          <input
            type="submit"
            value="Login"
            className="btn btn-primary"
            disabled={validate()}
          />
        )}
      </form>
      <div className="register-if-not-account">
        <p>You don't have an account?</p>
        <p onClick={togglePane}>Register</p>
      </div>
    </div>
  );
};

export default LoginForm;
