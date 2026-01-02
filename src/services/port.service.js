import BaseService from "./base.service.js";
import Port from "../models/port.model.js";

const portService = BaseService.createBaseService(Port);

export default portService;