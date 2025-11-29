// models/Consignee.js
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const consigneeSchema = new Schema({
  name: { type: String, required: true },
  address: String,
  country: String
});

export default model("Consignee", consigneeSchema, "consignees");
