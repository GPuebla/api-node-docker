// models/Line.js
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const lineSchema = new Schema({
  name: { type: String, required: true }
});

export default model("Line", lineSchema);
