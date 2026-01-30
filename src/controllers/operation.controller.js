import BaseController from "./base.controller.js";
import operationService from "../services/operation.service.js";

const operationController = BaseController.createBaseController(operationService);

export default operationController;