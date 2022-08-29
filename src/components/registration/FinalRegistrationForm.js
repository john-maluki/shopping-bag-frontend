import Joi from "joi";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { lastUserRegistration } from "../../services/userService";
import {
  formValidate,
  formValidateProperty,
} from "../../validation/validateForm";
import CancellingIndicator from "../utils/CancellingIndicator";
import SavingIndicator from "../utils/SavingIndicator";

const FinalRegistrationForm = () => {
  const [sending, setSending] = useState(false);
  const [cancelling, setCancelling] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    contact: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const location = useLocation();
  let navigate = useNavigate();

  const schema = {
    firstName: Joi.string().required().label("First name"),
    middleName: Joi.string().required().label("Middle name"),
    lastName: Joi.string().required().label("Last name"),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email"),
    contact: Joi.string().required().label("Contact"),
  };

  const checkLocationState = () => {
    // This methods prevents url navigaton.
    // It is called when the compnent mounts
    if (location.state === null) {
      navigate("/");
    }
  };

  useEffect(checkLocationState);

  const handleLastRegistration = async (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors || {});
    if (errors) {
      return;
    }
    // Add user id and username
    const userData = {
      id: location?.state?.id,
      username: location?.state?.username,
      ...data,
    };
    console.log(userData);
    setSending(true);
    setTimeout(async () => {
      try {
        const res = await lastUserRegistration(userData);
        console.log(res.data);
        setSending(false);
        navigate("/");
      } catch (err) {
        if (err.response && err.response.status === 400) {
          console.log(err.response.data);
        }
      }
    }, 3000);

    // start last registering
  };

  const handleRegistrationCancellation = () => {
    setCancelling(true);
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
    <main>
      <div>
        <form onSubmit={handleLastRegistration}>
          <fieldset id="completing-registration">
            <legend>Complete your account</legend>
            <fieldset className="personal-information">
              <legend>Personal Information</legend>
              <div className="form-control">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  value={data.firstName}
                  name="firstName"
                  onChange={handleChange}
                  placeholder="First name"
                />
                {formErrors.firstName && (
                  <div className="errors">{formErrors.firstName}</div>
                )}
              </div>
              <div className="form-control">
                <label htmlFor="middleName">Middle Name:</label>
                <input
                  type="text"
                  value={data.middleName}
                  name="middleName"
                  onChange={handleChange}
                  placeholder="Middle name"
                />
                {formErrors.middleName && (
                  <div className="errors">{formErrors.middleName}</div>
                )}
              </div>
              <div className="form-control">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  value={data.lastName}
                  name="lastName"
                  onChange={handleChange}
                  placeholder="Last name"
                />
                {formErrors.lastName && (
                  <div className="errors">{formErrors.lastName}</div>
                )}
              </div>
            </fieldset>
            <div className="personal-email-and-contact">
              <fieldset className="personal-email">
                <legend>Personal Email</legend>
                <div className="form-control">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    value={data.email}
                    name="email"
                    onChange={handleChange}
                    placeholder="Email"
                  />
                  {formErrors.email && (
                    <div className="errors">{formErrors.email}</div>
                  )}
                </div>
              </fieldset>
              <fieldset className="personal-contact">
                <legend>Personal Contact</legend>
                <div className="form-control">
                  <label htmlFor="contact">Contact:</label>
                  <input
                    type="text"
                    value={data.contact}
                    name="contact"
                    onChange={handleChange}
                    placeholder="Contact"
                  />
                  {formErrors.contact && (
                    <div className="errors">{formErrors.contact}</div>
                  )}
                </div>
              </fieldset>
            </div>
            <div className="complete-account-registration">
              {sending ? (
                <SavingIndicator title={"saving"} />
              ) : (
                <input
                  type="submit"
                  value={validate() ? "Complete your account" : "save"}
                  className="btn btn-primary"
                  disabled={validate()}
                />
              )}
            </div>
          </fieldset>
        </form>
      </div>
      <div className="cancel-final-registration">
        {cancelling ? (
          <CancellingIndicator title={"cancelling"} />
        ) : (
          <button disabled={sending} onClick={handleRegistrationCancellation}>
            Cancel
          </button>
        )}
      </div>
    </main>
  );
};

export default FinalRegistrationForm;
