import BaseRoute from "./base.route";
import portController from '../controllers/port.controller'

const router = BaseRoute.createBaseRouter(portController);

export default router;