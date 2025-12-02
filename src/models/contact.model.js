import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;


const contactSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: String,

  relatedModel: {
    type: String,
    required: true,
    enum: ["Shipper", "Consignee", "Customs Broker", "Line"]
  },
  relatedId: {
    type: Types.ObjectId,
    required: true,
    refPath: "relatedModel"
  }
});

export default model("Contact", contactSchema,"contacts");
