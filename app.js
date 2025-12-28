import express from 'express';
import notFound from './src/middleware/notFound.js';
import errorHandler from './src/middleware/errorHandler.js';
import containerRoute from './src/routes/container.route.js';
import bookingRoute from './src/routes/booking.route.js';
import consigneeRoute from './src/routes/consignee.route.js';
import contactRoute from './src/routes/contact.route.js';

const app = express();

// Middlewares globales
app.use(express.json());

// Rutas
app.use("/containers", containerRoute);
app.use("/bookings", bookingRoute);
app.use("/consignees", consigneeRoute);
app.use("/contacts", contactRoute);

// Middlewares de errores
app.use(notFound);
app.use(errorHandler);

export default app;
