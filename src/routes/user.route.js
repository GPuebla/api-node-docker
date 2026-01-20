import BaseRoute from "./base.route";
import userController from "../controllers/user.controller";

const router = BaseRoute.createBaseRouter(userController);

export default router;