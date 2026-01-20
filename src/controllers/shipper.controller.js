import BaseController from "./base.controller.js";
import shipperService from "../services/shipper.service.js";

const shipperController = BaseController.createBaseController(shipperService);

export default shipperController;