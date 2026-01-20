import BaseService from "./base.service.js";
import transport from "../models/transport.model";

const transportService = BaseService.createBaseService(transport);

export default transportService;
