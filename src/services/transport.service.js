import BaseService from "./base.service";
import transport from "../models/transport.model";

const transportService = BaseService.createBaseService(transport);

export default transportService;
