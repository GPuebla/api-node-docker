// models/Route.js
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const routeSchema = new Schema({
  name: { type: String, required: true },
  ports: [String]
});

export default model("Route", routeSchema);
