import BaseRoute from "./base.route.js";
import lineController from "../controllers/line.controller";

const router = BaseRoute.createBaseRouter(lineController);

export default router;