// models/Shipper.js
import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;

const shipperSchema = new Schema({
  name: { type: String, required: true },
  address: String,
  city: String,
  state: String,
  country: {type: String, requied:true},
  observations: String,

  contacts: {type:[{type: Types.ObjectId, ref:'Contact'}], default:[]}, 
  customsBroker: {type:Types.ObjectId,ref:"CustomBroker"}
  
});

export default model("Shipper", shipperSchema);
