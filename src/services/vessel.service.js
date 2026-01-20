import BaseService from "./base.service.js"
import vessel from "../models/vesselmodel.js"

const vesselService = BaseService.createBaseService(vessel);

export default vesselService;