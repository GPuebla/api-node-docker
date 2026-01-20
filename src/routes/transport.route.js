import BaseRoute from "./base.route.js";
import transportController from "../controllers/transport.controller.js";

const router = BaseRoute.createBaseRouter(transportController);

export default router;