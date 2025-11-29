import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;


const contactSchema = new Schema({
  nombre: { type: String, required: true },
  cel: { type: String, required: true },
  correo: String,

  // 👇 Relación polimórfica
  relatedModel: {
    type: String,
    required: true,
    enum: ["Shipper", "Consignee", "Despachante", "Line"]
  },
  relatedId: {
    type: Types.ObjectId,
    required: true,
    refPath: "relatedModel" // referencia dinámica según el modelo
  }
});

export default model("Contact", contactSchema,"contacts");
