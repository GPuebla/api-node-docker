import express from 'express'
import authorController from '../controllers/authorConrtoller'

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Servidor funcionando y ruta test ok");
});

router.post('/add',authorController.createAuthor);

export default router;