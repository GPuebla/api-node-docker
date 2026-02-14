import Joi from "joi";
import { objectId } from "./index.js";

const createOperationSchema = Joi.object({
    opNumber: objectId
        .required()
        .messages({
        "string.base": "Operation number must be a string.",
        "any.required": "Operation number is required.",
    }),
    booking: objectId
        .required()
        .messages({
        "number.base": "Booking must be a number.",
        "any.required": "Booking is required.",
    }),
    
});

const updateOperationSchema = Joi.object({
    opNumber: objectId
        .messages({
        "string.base": "Operation number must be a string.",
    }),
    booking: objectId
        .messages({
        "number.base": "Booking must be a number.",
    }),
    
});

export default {createOperationSchema,updateOperationSchema};