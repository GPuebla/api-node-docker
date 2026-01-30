import Joi from "joi";

const objectId = Joi.string().hex().length(24);

const createBookingSchema = Joi.object({
    number: Joi.string().trim().required(),
  
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
    if (value.POL === value.POD) {
      return helpers.message("POL and POD cannot be the same port");
    }
    return value;
  });

const updateBookingSchema = Joi.object({
  number: Joi.string().trim(),

  state: Joi.string()
    .valid("Pending", "Required", "Confirmed"),

  containers: Joi.array()
    .items(objectId),

  quantityContainers: Joi.number()
    .integer()
    .min(1),

  POL: objectId,
  POD: objectId,

  vessel: objectId,
  line: objectId,

  shipper: objectId,
  consignee: objectId,
})
.min(1)
.custom((value, helpers) => {
  if (value.POL && value.POD && value.POL === value.POD) {
    return helpers.message("POL and POD cannot be the same port");
  }
  return value;
});

export default { createBookingSchema, updateBookingSchema };