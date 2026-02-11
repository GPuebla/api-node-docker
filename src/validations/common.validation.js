import Joi from "joi";

export const objectId = Joi.string().hex().length(24).messages({
    "string.hex": "Invalid ObjectId format",
    "string.length": "ObjectId must be 24 characters",
  });

export const email = Joi.string()
  .email()
  .lowercase()
  .trim();

export const password = Joi.string()
    .min(8);

export const pagination = {
  page: Joi.number()
    .integer()
    .min(1)
    .default(1),
    
  limit: Joi.number()
    .integer()
    .min(1)
    .max(100)
    .default(10),
};

