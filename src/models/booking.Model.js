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

/* ===== VIRTUALS ===== */
bookingSchema.virtual("containersAssigned").get(function () {
  return this.containers.length;
});

bookingSchema.virtual("containersPending").get(function () {
  return this.quantityContainers - this.containers.length;
});

/* ===== CONFIG ===== */
bookingSchema.set("toJSON", { virtuals: true });
bookingSchema.set("toObject", { virtuals: true });

bookingSchema.pre("save", function (next) {
  if (this.POL.equals(this.POD)) {
    return next(new Error("POL and POD cannot be the same port"));
  }
  next();
});


export default mongoose.models.Booking || model("Booking", bookingSchema,'bookings');
