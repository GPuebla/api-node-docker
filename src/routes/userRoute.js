import express from 'express';
import userController from '../controllers/userController.js';

// Crear el router
const router = express.Router();

// Definir rutas
router.get('/', userController.getUsers);
router.get('/2', userController.getUsers2);
router.post('/', userController.createUser);

// Exportar router
export default router;

