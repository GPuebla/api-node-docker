import Joi, { string } from 'joi';

const createBookingSchema = Joi.object({
  number: Joi.string()
    .required(),

  state: Joi.string()
    .valid("Pending", "Required", "Confirmed")
    .default("Pending"),

  containers: Joi.array()
    .items(objectId)
    .default([]),

  quantityContainers: Joi.number()
    .integer()
    .min(1)
    .required(),

  POL: objectId.required(),
  POD: objectId.required(),

  vessel: objectId.required(),
  line: objectId.required(),

  shipper: objectId.required(),
  consignee: objectId.required(),
})
.custom((value, helpers) => {
  // 🔴 Equivalente al pre("save")
  if (value.POL === value.POD) {
    return helpers.error("any.invalid", {
      message: "POL and POD cannot be the same port",
    });
  }
  return value;
}, "POL/POD validation");

const updateBookingSchema = Joi.object({
  number: Joi.string(),

  state: Joi.string().valid("Pending", "Required", "Confirmed").default("Pending"),

  containers: Joi.array().items(objectId),

  quantityContainers: Joi.number().integer().min(1),

  POL: objectId,
  POD: objectId,

  vessel: objectId,
  line: objectId,

  shipper: objectId,
  consignee: objectId,
}).min(1) // 🔴 At least one field is required for update
.custom((value, helpers) => {
  if (value.POL && value.POD && value.POL === value.POD) {
    return helpers.error("any.invalid", {
      message: "POL and POD cannot be the same port",
    });
  }
  return value;
});

export default {createBookingSchema, updateBookingSchema};