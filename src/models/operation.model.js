import mongoose from "mongoose";

const { Schema, model, Types } = mongoose;


const operationSchema = new Schema(
  {
    // Official operation number (assigned only after confirmation)
    opNumber: {
      type: Number,
      unique: true,
      sparse: true, // allows multiple null values with unique index
      index: true,
      default:null,
    },

    // Current business status of the operation
    status: {
      type: String,
      enum: ["pending", "confirmed", "active", "cancelled"],
      default: "pending",
      index: true,
    },

    // Related booking reference (optional until confirmed)
    booking: {
      type: Types.ObjectId,
      ref: "Booking",
      default: null,
    },

    // Assigned transport
    transport: {type:[{
      type:Types.ObjectId,
      ref: "Transport"}],
      default: [],
    },

  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.models.Operation ||
  model("Operation", operationSchema, "operations");