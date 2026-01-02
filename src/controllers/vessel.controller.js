import BaseController from "./base.controller";
import vesselService from "../services/vessel.service";

const vesselController = BaseController.createBaseController(vesselService);

export default vesselController;