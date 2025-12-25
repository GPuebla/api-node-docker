import { Router } from "express";
import BaseRouter from "./base.route.js";
import containerController from "../controllers/container.controller.js";

// const router = Router();

// router.post("/", containerController.create);
// router.get("/", containerController.getAll);
// router.get("/:id", containerController.getById);
// router.put("/:id", containerController.update);

// router.get("/booking/:bookingId", containerController.getByBooking);

// router.put("/:id/settings", containerController.reassignSettings);
// router.put("/:id/status", containerController.updateStatus);

// router.delete("/:id", containerController.deleteById);


/***************** CON BASE ROUTE ********************/

const router = BaseRouter.createBaseRouter(containerController);

router.get("/booking/:bookingId", containerController.getByBooking);

router.put("/:id/settings", containerController.reassignSettings);
router.put("/:id/status", containerController.updateStatus);

// router.delete("/:id", containerController.deleteById);


export default router;
