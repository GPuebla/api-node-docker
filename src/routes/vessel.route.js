import BaseRoute from "./base.route";
import vesselController from "../controllers/vessel.controller";

const router = BaseRoute.createBaseRouter(vesselController);

export default router;