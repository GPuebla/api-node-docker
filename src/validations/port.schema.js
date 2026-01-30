import Joi, {required, string} from "joi";

const createPortSchema = Joi.object({
    name:Joi.string().required(),
    country:Joi.string(),
});

const updatePortSchema = Joi.object({
    name:Joi.string(),
    country:Joi.string(),
}).min(1); // 🔴 At least one field is required for update

export default {createPortSchema, updatePortSchema};