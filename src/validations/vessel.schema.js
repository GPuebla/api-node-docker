import Joi from "joi";

const creatVesselSchema = Joi.object({
    name: Joi.string()
    .min(3)
    .max(50)
    .required(),

    voyage: Joi.string()
    .max(50)
    .optional(),
});

const updateVesselSchema = Joi.object({
    name: Joi.string()
    .min(3)
    .max(50),

    voyage: Joi.string()
    .max(50),
}).min(1);

export default {createVesselSchema, updateVesselSchema};