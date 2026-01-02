import BaseService from "./base.service"
import vessel from "../models/vessel.Model"

const vesselService = BaseService.createBaseService(vessel);

export default vesselService;