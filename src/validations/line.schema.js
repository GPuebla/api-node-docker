import Joi from "joi";

const createLineSchema = Joi.object({
    name: Joi.string()
    .min(3)
    .max(50)
    .required(),

    country: Joi.string()
    .max(50)
    .optional(),
});

const updateLineSchema = Joi.object({
    name: Joi.string()
    .min(3)
    .max(50),  

    country: Joi.string()
    .max(50),
}).min(1);  

export default {createLineSchema, updateLineSchema};