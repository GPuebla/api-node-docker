import express from 'express';
import notFound from './src/middleware/notFound.middleware.js';
import errorHandler from './src/middleware/error.middleware.js';
import containerRoute from './src/routes/container.route.js';
import bookingRoute from './src/routes/booking.route.js';
import consigneeRoute from './src/routes/consignee.route.js';
import contactRoute from './src/routes/contact.route.js';
import portRoute from './src/routes/port.route.js';
import transportRoute from './src/routes/transport.route.js';
import vesselRoute from './src/routes/vessel.route.js';
import lineRoute from './src/routes/line.route.js';
import shipperRoute from './src/routes/shipper.route.js';
import userRoute from './src/routes/user.route.js';
import authRoutes from "./src/routes/auth.route.js";

const app = express();

// Middlewares globales
app.use(express.json());

// Rutas
app.use("/containers", containerRoute);
app.use("/bookings", bookingRoute);
app.use("/consignees", consigneeRoute);
app.use("/contacts", contactRoute);
app.use("/ports", portRoute);
app.use("/transports",transportRoute);
app.use("/vessels",vesselRoute);
app.use("/lines", lineRoute);
app.use("/shippers", shipperRoute);
app.use("/users", userRoute);
app.use("/auth", userRoute);

// Middlewares de errores
app.use(notFound);
app.use(errorHandler);

export default app;
