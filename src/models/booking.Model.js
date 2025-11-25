import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;

const bookingSchema = new Schema({
  number: { type: String, required: true, unique: true },
  estado: {
    type: String,
    enum: ["Pendiente", "Solicitado", "Confirmado"],
    default: "Pendiente"
  },

  containers: [{ type: Types.ObjectId, ref: "Container" }],

  quantityContainers: { type: Number, required: true },

  route: { type: Types.ObjectId, ref: "Route", required: true },
  vessel: { type: Types.ObjectId, ref: "Vessel", required: true },
  line: { type: Types.ObjectId, ref: "Line", required: true },

  // Shipper / Consignee
  shipper: { type: Types.ObjectId, ref: "Shipper", required: true },
  consignee: { type: Types.ObjectId, ref: "Consignee", required: true }
}, { timestamps: true });

export default model("Booking", bookingSchema);
