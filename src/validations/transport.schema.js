import { name } from "ejs";
import Joi from "joi";
import objectId from "../validations/index.js";

const createTransportSchema = Joi.object({
    name: Joi.string()
    .min(3)
    .max(50)
    .required(),

    contacts: objectId
    .required(),
});

const updateTransportSchema = Joi.object({
    name: Joi.string()
    .min(3)
    .max(50),

    contacts: objectId,
}).min(1);

export default {createTransportSchema, updateTransportSchema};