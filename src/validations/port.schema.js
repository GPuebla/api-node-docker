import Joi, {required, string} from "joi";

const createPortSchema = Joi.object({
    name:Joi.string().required(),
    country:Joi.string(),
});

const updatePortSchema = Joi.object({
    name:Joi.string(),
    country:Joi.string(),
});

export default {createPortSchema, updatePortSchema};