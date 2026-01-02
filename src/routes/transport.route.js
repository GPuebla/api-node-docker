import BaseRoute from "./base.route";
import transportController from "../controllers/transport.controller";

const router = BaseRoute.createBaseRouter(transportController);

export default router;