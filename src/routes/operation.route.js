import BaseRoute from "./base.route.js";
import operationController from "../controllers/operation.controller.js";
import authenticate from "../middlewares/auth.middleware.js";

const router = BaseRoute.createBaseRouter(operationController, [authenticate]);

export default router;