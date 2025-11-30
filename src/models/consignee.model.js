// models/Consignee.js
import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;

const consigneeSchema = new Schema({
  name: { type: String, required: true },
  address: String,
  country: String,
  contacts: {type:[{type: Types.ObjectId, ref:"Contact"}],default:[]}
});

export default model("Consignee", consigneeSchema, "consignees");
