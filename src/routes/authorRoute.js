import express from 'express'
import createAuthor from '../controllers/authorController'

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Servidor funcionando y ruta test ok");
});

router.post("/add", createAuthor);

export default router;