import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;


const contactSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: String,

  relatedModel: {
    type: String,
    enum: ["Shipper", "Consignee", "Customs Broker", "Line"]
  },
  relatedId: {
    type: Types.ObjectId,
    refPath: "relatedModel"
  }
});

export default mongoose.models.Contact || model("Contact", contactSchema,"contacts");
