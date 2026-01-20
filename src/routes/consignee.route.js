import BaseRouter from "./base.route.js";
import consigneeController from "../controllers/consignee.controller";


const router = BaseRouter.createBaseRouter(consigneeController);

export default router;

