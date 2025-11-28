import express from 'express';
import notFound from './src/middleware/notFound.js';
import errorHandler from './src/middleware/errorHandler.js';
import containerRoute from './src/routes/container.route.js'

const app = express();

// Middlewares globales
app.use(express.json());

// Rutas
app.use("/containers", containerRoute);

// Middlewares de errores
app.use(notFound);
app.use(errorHandler);

export default app;
