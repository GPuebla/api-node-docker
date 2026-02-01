import BaseService from "./base.service.js";
import Operation from "../models/operation.model.js";

const operationService = BaseService.createBaseService(Operation, {
        populate: "booking transport container",
    }
);

export default operationService;