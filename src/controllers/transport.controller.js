import BaseController from "./base.controller";
import transportService from "../services/transport.service";

const transportController = BaseController.createBaseController(transportService);

export default transportController;