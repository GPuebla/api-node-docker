import BaseController from "./base.controller.js";
import transportService from "../services/transport.service.js";

const transportController = BaseController.createBaseController(transportService);

export default transportController;