import BaseController from "./base.controller.js";
import consigneeService from "../services/consignee.service.js";

const consigneeController = BaseController.createBaseController(consigneeService);

export default consigneeController;

