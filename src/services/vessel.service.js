import BaseService from "./base.service.js"
import vessel from "../models/vessel.Model.js"

const vesselService = BaseService.createBaseService(vessel);

export default vesselService;