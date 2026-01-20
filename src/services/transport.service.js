import BaseService from "./base.service.js";
import transport from "../models/transport.model.js";

const transportService = BaseService.createBaseService(transport);

export default transportService;
