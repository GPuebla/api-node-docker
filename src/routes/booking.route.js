import BaseRoute from "../routes/base.route.js"
import validate from "../middlewares/validate.middleware.js";
import bookingController from '../controllers/booking.controller.js';
import { createBookingSchema, updateBookingSchema } from "../validations/booking.schema.js";
import { idParamSchema } from "../validations/params.schema.js";

const router = BaseRoute.createBaseRouter(bookingController, {
  create: [validate(createBookingSchema)],
  update: [
    validate(idParamSchema, "params"),
    validate(updateBookingSchema)
  ],
  getById: [validate(idParamSchema, "params")]
});


export default router;