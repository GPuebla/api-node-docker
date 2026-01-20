import BaseService from "./base.service.js"
import vessel from "../models/vessel.Model"

const vesselService = BaseService.createBaseService(vessel);

export default vesselService;