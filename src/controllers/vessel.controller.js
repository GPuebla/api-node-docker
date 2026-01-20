import BaseController from "./base.controller.js";
import vesselService from "../services/vessel.service.js";

const vesselController = BaseController.createBaseController(vesselService);

export default vesselController;