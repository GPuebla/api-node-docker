import BaseRoute from "./base.route.js";
import portController from '../controllers/port.controller.js'

const router = BaseRoute.createBaseRouter(portController);

export default router;