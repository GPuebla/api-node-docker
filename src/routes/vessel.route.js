import BaseRoute from "./base.route.js";
import vesselController from "../controllers/vessel.controller.js";

const router = BaseRoute.createBaseRouter(vesselController);

export default router;