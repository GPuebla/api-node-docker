import BaseController from "./base.controller";
import shipperService from "../services/shipper.service";

const shipperController = BaseController.createBaseController(shipperService);

export default shipperController;