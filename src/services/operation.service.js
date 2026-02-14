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
      populate: [
        { path: "POL" },
        { path: "POD" },
        { path: "vessel" },
        { path: "line" },
        { path: "shipper" },
        { path: "consignee" },
        { path: "containers" }
      ]
    },
    { path: "transport" }
  ]
});

export default operationService;