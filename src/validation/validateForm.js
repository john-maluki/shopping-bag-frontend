import Joi from "joi";

export const formValidate = (schema, data) => {
  const result = Joi.object(schema).validate(data, {
    abortEarly: false,
  });
  if (!result.error) {
    return null;
  }
  const errors = {};
  for (let item of result.error.details) {
    errors[item.path[0]] = item.message;
  }

  return errors;
};

export const formValidateProperty = (name, value, schema) => {
  const obj = { [name]: value };
  const mSchema = Joi.object({ [name]: schema[name] });
  const { error } = mSchema.validate(obj);
  return error ? error.details[0].message : null;
};
