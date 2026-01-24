import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";
import { error } from "console";

const router = Router();

// POST auth/login
router.get("/login", (req,res)=>{
    res.render("auth/login",{error:null});
});

router.post("/login", AuthController.login);

export default router;
