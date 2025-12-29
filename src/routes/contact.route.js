import BaseRouter from './base.route.js';
import contactController from '../controllers/contact.controller.js';

const router = BaseRouter.createBaseRouter(contactController);

export default router;