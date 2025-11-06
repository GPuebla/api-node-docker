import express from 'express';
import userController from '../controllers/userController';

// Crear el router
const router = express.Router();

// Definir rutas
router.get('/', userController.getUsers);
router.get('/1', (req,res)=>{res.send("Test")});
router.get('/2', userController.getUsers2);
router.post('/', userController.createUser);

// Exportar router
export default router;

