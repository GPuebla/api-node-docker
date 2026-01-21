import BaseRoute from "./base.route.js";
import userController from "../controllers/user.controller.js";
import authenticate from "../middlewares/auth.middleware.js";

const router = BaseRoute.createBaseRouter(userController,[authenticate]);

export default router;