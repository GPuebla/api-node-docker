import Joi from "joi";
import { objectId } from "./index.js";

const createConsigneeSchema = Joi.object({
    name: Joi.string()
    .min(3)
    .max(50)
    .required(),

    adress: Joi.string()
    .max(100)
    .optional(),

    country: Joi.string()
    .max(50)
    .optional(),  

    contacts: objectId
    .required()
});

const updateConsigneeSchema = Joi.object({
    name: Joi.string()
    .min(3)
    .max(50),

    adress: Joi.string()
    .max(100),

    country: Joi.string()
    .max(50),

    contacts: objectId

}).min(1);

export default {createConsigneeSchema, updateConsigneeSchema};