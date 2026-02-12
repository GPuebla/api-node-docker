import BaseRoute from "../routes/base.route.js"

import validate from "../middlewares/validate.middleware.js";
import validateRefs from "../middlewares/validateRefs.middleware.js";

import bookingController from '../controllers/booking.controller.js';
import bookingSchema from "../validations/booking.schema.js";
import { idParamSchema } from "../validations/params.schema.js";

//Models
import Port from "../models/port.model.js";
import Vessel from "../models/vessel.model.js";
import Line from "../models/line.model.js";
import Shipper from "../models/shipper.model.js";
import Consignee from "../models/consignee.model.js";

const router = BaseRoute.createBaseRouter(bookingController, {
  create: [
    validate(bookingSchema.createBookingSchema),
    
    validateRefs({
      POL: Port,
      POD: Port,
      vessel: Vessel,
      line: Line,
      shipper: Shipper,
      consignee: Consignee
    })
  ],

  update: [
    validate(idParamSchema, "params"),
    validate(bookingSchema.updateBookingSchema),
    validateRefs({
      POL: Port,
      POD: Port,
      vessel: Vessel,
      line: Line,
      shipper: Shipper,
      consignee: Consignee
    })
  ],
  
  getById: [validate(idParamSchema, "params")]
});


export default router;