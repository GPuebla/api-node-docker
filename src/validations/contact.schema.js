import Joi from "joi";

const createContactSchema = Joi.object({
    name: Joi.string()
    .min(3)
    .max(50)
    .required(),

    phone: Joi.string()
    .pattern(/^[0-9]{10,15}$/)
    .required(),

    email: Joi.string()
    .email()
    .required(),
});

const updateContactSchema = Joi.object({
    name: Joi.string()
    .min(3)
    .max(50),

    phone: Joi.string()
    .pattern(/^[0-9]{10,15}$/),

    email: Joi.string()
    .email(),

}).min(1);

export default {createContactSchema, updateContactSchema};