import Joi from "joi";
import { objectId } from "./index.js";

const createCustomBrokerSchema = Joi.object({
    name: Joi.string()
    .min(3)
    .max(50)
    .required(),

    contacts: objectId
    .required(),
});

const updateCustomBrokerSchema = Joi.object({
    name: Joi.string()
    .min(3)
    .max(50),

    contacts: objectId,
}).min(1);    

export default {createCustomBrokerSchema, updateCustomBrokerSchema};