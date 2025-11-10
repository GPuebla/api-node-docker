import express from "express";
import bookController from "../controllers/bookController.js";

const router = express.Router();

router.get("/", bookController.getBooks);
router.get("/:id", bookController.getBookByID);

export default router;
