import BaseRouter from "./base.route.js";
import consigneeController from "../controllers/consignee.controller.js";


const router = BaseRouter.createBaseRouter(consigneeController);

export default router;

