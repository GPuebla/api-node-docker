import BaseRoute from "./base.route.js";
import portController from '../controllers/port.controller'

const router = BaseRoute.createBaseRouter(portController);

export default router;