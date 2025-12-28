import BaseController from "./base.controller";
import consigneeService from "../services/consignee.service";

const consigneeController = BaseController.createBaseController(consigneeService);

export default consigneeController;

