import Joi from "joi";

const createContainerSchema = Joi.object({
    number: Joi.string()
    .min(3)
    .max(50)
    .required(),

    type: Joi.string()
    .max(50)
    .optional()
    .valid(
        "To Confirm",
        "Empty Picked Up",
        "Loaded",
        "Stacking In",
        "Off-Dock",
        "In Transit",
        "At Destination Port",
        "Empty Returned"
    ).default("To Confirm"),
});

const updateContainerSchema = Joi.object({
    number: Joi.string()
    .min(3)
    .max(50),

    type: Joi.string()
    .max(50)
    .valid(
        "To Confirm",
        "Empty Picked Up",
        "Loaded",
        "Stacking In",
        "Off-Dock",
        "In Transit",
        "At Destination Port",
        "Empty Returned"
    ).default("To Confirm"),
}).min(1);

export default {createContainerSchema, updateContainerSchema};