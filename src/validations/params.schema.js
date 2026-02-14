import Joi from "joi";
import { objectId } from "./index.js";

export const idParamSchema = Joi.object({
  id: objectId.required(),
});
