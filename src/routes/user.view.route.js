import { Router } from "express";
import userViewController from "../controllers/user.view.controller.js"
import authenticate from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/",authenticate, userViewController.index);
router.get("/:id([0-9a-fA-F]{24})",authenticate, userViewController.show);

export default router;