import Joi from "joi";

const createOperationSchema = Joi.object({
    opNumber: Joi.string()
        .required()
        .messages({
        "string.base": "Operation number must be a string.",
        "string.empty": "Operation number is required.",
        "any.required": "Operation number is required.",
    }),
    booking: Joi.number()
        .required()
        .messages({
        "number.base": "Booking must be a number.",
        "any.required": "Booking is required.",
    }),
    
});

const updateOperationSchema = Joi.object({
    opNumber: Joi.string()
        .messages({
        "string.base": "Operation number must be a string.",
    }),
    booking: Joi.number()
        .messages({
        "number.base": "Booking must be a number.",
    }),
    
});

export default {createOperationSchema,createOperationSchema};