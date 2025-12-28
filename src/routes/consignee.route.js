import BaseRouter from "./base.route";
import consigneeController from "../controllers/consignee.controller";


const router = BaseRouter.createBaseRouter(consigneeController);

export default router;

