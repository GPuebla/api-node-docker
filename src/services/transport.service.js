import BaseService from "./base.service.js";
import transport from "../models/transportmodel";

const transportService = BaseService.createBaseService(transport);

export default transportService;
