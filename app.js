import cors from "cors";
import express from 'express';
import path from 'path';
import cookieParser from "cookie-parser";
import expressLayouts from "express-ejs-layouts"

//API
import notFound from './src/middlewares/notFound.middleware.js';
import errorHandler from './src/middlewares/error.middleware.js';
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
import operationRoute from './src/routes/operation.route.js';
import authRoutes from "./src/routes/auth.route.js";

//VIEWS
import userViewRoute from './src/routes/user.view.route.js'



const app = express();

app.set("view engine","ejs");
app.set("views", path.join(
        process.cwd(),"src","views"
    )
);

app.set("layout", "layouts/main")

app.use(express.urlencoded({extended:true}));
app.use(expressLayouts)
app.use(cookieParser());
app.use(cors()); // Enables Cors for all routes

// Middlewares globales
app.use(express.json());


// API ROUTES
app.use("/api/containers", containerRoute);
app.use("/api/operations", operationRoute);
app.use("/api/bookings", bookingRoute);
app.use("/api/consignees", consigneeRoute);
app.use("/api/contacts", contactRoute);
app.use("/api/ports", portRoute);
app.use("/api/transports",transportRoute);
app.use("/api/vessels",vesselRoute);
app.use("/api/lines", lineRoute);
app.use("/api/shippers", shipperRoute);
app.use("/api/users", userRoute);
app.use("/auth", authRoutes);


// VIEWS ROUTES
app.use("/containers", (req,res)=>{res.json({message:"containers"});});
app.use("/bookings",  (req,res)=>{res.json({message:"bookings"});});
app.use("/consignees",  (req,res)=>{res.json({message:"consignees"});});
app.use("/contacts",  (req,res)=>{res.json({message:"contacts"});});
app.use("/ports",  (req,res)=>{res.json({message:"ports"});});
app.use("/transports", (req,res)=>{res.json({message:"transports"});});
app.use("/vessels", (req,res)=>{res.json({message:"vessels"});});
app.use("/lines",  (req,res)=>{res.json({message:"lines"});});
app.use("/shippers",  (req,res)=>{res.json({message:"shippers"});});
app.use("/users",userViewRoute);


app.get("/", (req,res)=>{
    res.render("index",{
        title:"Home",
        error:null
    })
});

// Middlewares de errores
app.use(notFound);
app.use(errorHandler);

export default app;
