// models/Transport.js
import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;

const transportSchema = new Schema({
  name: { type: String, required: true },
  contacts: {type:[{type: Types.ObjectId, ref:'Contact'}], default:[]}, 
  
});

export default model("Transport", transportSchema, "transport");
