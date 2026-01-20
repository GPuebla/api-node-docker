import BaseRoute from "./base.route.js";
import userController from "../controllers/user.controller.js";

const router = BaseRoute.createBaseRouter(userController);

export default router;