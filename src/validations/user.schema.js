import Join from "joi";

const createUserSchema = Joi.object({
    name:Joi.string().required(),
    country:Joi.string(),
});

const updateUserSchema = Joi.object({
    name:Joi.string(),
    country:Joi.string(),
});

export default {createShipperSchema, updateShipperSchema};