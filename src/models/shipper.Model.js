// models/Shipper.js
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const shipperSchema = new Schema({
  nombre: { type: String, required: true },
  direccion: String,
  ciudad: String,
  provincia: String,
  preferencias: String,

  contacto: {
    nombre: String,
    telefono: String,
    email: String
  },

  despachante: {
    nombre: String,
    telefono: String,
    email: String
  }
});

export default model("Shipper", shipperSchema);
