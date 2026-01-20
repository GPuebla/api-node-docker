import BaseService from "./base.service.js"
import vessel from "../models/vessel.model.js"

const vesselService = BaseService.createBaseService(vessel);

export default vesselService;