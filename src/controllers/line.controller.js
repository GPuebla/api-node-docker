import BaseController from "./base.controller";
import lineService from "../services/line.service";

const lineController = BaseController.createBaseController(lineService);

export default lineController;