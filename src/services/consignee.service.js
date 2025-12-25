import BaseService from "./base.service.js";
import Consignee from "../models/consignee.model.js";

const consigneeService = BaseService.createBaseService(Consignee);

export default consigneeService;
