import BaseController from "./base.controller.js";
import operationService from "../services/operation.service.js";
import Counter from "../models/counter.model.js";

const operationController = BaseController.createBaseController(operationService);

export default operationController;



// PUT /operations/:id/confirm


// export const confirmOperation = async (req, res, next) => {
//   try {
//     const operation = await Operation.findById(req.params.id);

//     if (!operation) {
//       return res.status(404).json({ message: "Operation not found" });
//     }

//     // Business rule: only pending operations can be confirmed
//     if (operation.status !== "pending") {
//       return res.status(400).json({
//         message: "Only pending operations can be confirmed",
//       });
//     }

//     // Get next operation number
//     const counter = await Counter.findOneAndUpdate(
//       { name: "operation" },
//       { $inc: { seq: 1 } },
//       { new: true, upsert: true }
//     );

//     operation.opNumber = counter.seq;
//     operation.status = "confirmed";

//     await operation.save();

//     res.json(operation);
//   } catch (error) {
//     next(error);
//   }
// };
