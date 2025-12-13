import { Router } from 'express';
import bookingController from '../controllers/booking.controller';

const router = Router();

router.get('/',bookingController.getAll);
router.post('/',bookingController.create);

export default router;