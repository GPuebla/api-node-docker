import BaseService from "./base.service.js";
import Operation from "../models/operation.model.js";

// const operationService = BaseService.createBaseService(Operation, {
//         populate: "booking transport container",
//     }
// );

const operationService = BaseService.createBaseService(Operation, {
    populate: [
      {
        path: "booking",
        populate: "POL POD vessel line shipper consignee"
      },
      { path: "transport" },
      { path: "container" }
    ]
  });

export default operationService;