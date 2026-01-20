import BaseController from "./base.controller.js";
import lineService from "../services/line.service.js";

const lineController = BaseController.createBaseController(lineService);

export default lineController;