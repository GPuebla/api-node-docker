// models/Transport.js
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const transportSchema = new Schema({
  nombre: { type: String, required: true },
  contacto: String
});

export default model("Transport", transportSchema);
