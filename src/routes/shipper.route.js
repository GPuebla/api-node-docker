import BaseRoute from "./base.route";
import shipperController from "../controllers/shipper.controller";

const router = BaseRoute.createBaseRouter(shipperController);

export default router;