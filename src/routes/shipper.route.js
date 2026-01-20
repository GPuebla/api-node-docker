import BaseRoute from "./base.route.js";
import shipperController from "../controllers/shipper.controller.js";

const router = BaseRoute.createBaseRouter(shipperController);

export default router;