import express from 'express';
import userRoutes from './src/routes/userRoute.js';
import accountRoute from './src/routes/accountRoute.js';
import bookRoute from './src/routes/bookRoute.js';
import notFound from './src/middleware/notFound.js';
import errorHandler from './src/middleware/errorHandler.js';
import authorRoute from './src/routes/authorRoute.js'

const app = express();

// Middlewares globales
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/ac', accountRoute);
app.use('/books', bookRoute);
app.use("/authors", authorRoute);

// Middlewares de errores
app.use(notFound);
app.use(errorHandler);

export default app;
