import BaseRoute from "./base.route.js";
import userController from "../controllers/user.controller";

const router = BaseRoute.createBaseRouter(userController);

export default router;