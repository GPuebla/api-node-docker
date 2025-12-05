// models/Vessel.js
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const vesselSchema = new Schema({
  name: { type: String, required: true },
  voyage: { type: String, required: true }
});

export default model("Vessel", vesselSchema,"vessels");
