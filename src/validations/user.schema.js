import Joi from "joi";

const createUserSchema = Joi.object({
    name:Joi.string()
        .required(),
    email:Joi.string()
        .email()
        .required()
        .lowercase()
        .trim(),
    password:Joi.string()
        .min(8)
        .required(),
    role:Joi.string()
        .valid("admin","user")
        .default("user"),
    isActive:Joi.boolean()
        .default(true),
})

.custom((value, helpers) => {
  if (!/[A-Z]/.test(value.password)) {
    return helpers.message("Password must contain at least one uppercase letter");
  }
  return value;
});

const updateUserSchema = Joi.object({
    name:Joi.string(),
    email:Joi.string()
        .email()
        .lowercase()
        .trim(),
    password:Joi.string()
        .min(8),
    role:Joi.string()
        .valid("admin","user"),
    isActive:Joi.boolean(),
}).min(1) // 🔴 At least one field is required for update;

.custom((value, helpers) => {
  if (!/[A-Z]/.test(value.password)) {
    return helpers.message("Password must contain at least one uppercase letter");
  }
  return value;
});
export default {createUserSchema, updateUserSchema};