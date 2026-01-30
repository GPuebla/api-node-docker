import Joi from "joi";

// const createShipperSchema = Joi.object({
//     name:Joi.string().required(),
//     country:Joi.string(),
// });

// const updateShipperSchema = Joi.object({
//     name:Joi.string(),
//     country:Joi.string(),
// }).min(1); // 🔴 At least one field is required for update;

export default {createShipperSchema, updateShipperSchema};