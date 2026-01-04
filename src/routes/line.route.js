import BaseRoute from "./base.route";
import lineController from "../controllers/line.controller";

const router = BaseRoute.createBaseRouter(lineController);

export default router;