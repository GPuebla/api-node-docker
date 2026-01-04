import BaseRoute from "../routes/base.route"
import bookingController from '../controllers/booking.controller';

const router = BaseRoute.createBaseRouter(bookingController);

export default router;