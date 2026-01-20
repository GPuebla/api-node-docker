import BaseRoute from "../routes/base.route.js"
import bookingController from '../controllers/booking.controller.js';

const router = BaseRoute.createBaseRouter(bookingController);

export default router;