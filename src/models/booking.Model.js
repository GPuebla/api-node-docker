import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;

const bookingSchema = new Schema({
  number: { type: String, required: true, unique: true },
  state: {
    type: String,
    enum: ["Pending", "Required", "Confirmed"],
    default: "Pending"
  },

  containers: [{ type: Types.ObjectId, ref: "Container"}],

  quantityContainers: { type: Number, required: true },

  POL: { type: Types.ObjectId, ref: "Port", required: true },
  POD: { type: Types.ObjectId, ref: "Port", required: true },
  vessel: { type: Types.ObjectId, ref: "Vessel", required: true },
  line: { type: Types.ObjectId, ref: "Line", required: true },

  // Shipper / Consignee
  shipper: { type: Types.ObjectId, ref: "Shipper", required: true },
  consignee: { type: Types.ObjectId, ref: "Consignee", required: true }
}, { timestamps: true });

export default mongoose.models.Booking || model("Booking", bookingSchema,'bookings');
