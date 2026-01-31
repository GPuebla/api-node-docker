import mongoose from "mongoose";
const { Schema, model } = mongoose;

const counterSchema = new Schema(
  {
    // Entity name that uses this counter (e.g. "operation")
    name: {
      type: String,
      required: true,
      unique: true,
    },

    // Current sequence value
    seq: {
      type: Number,
      default: 0,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.models.Counter ||
  model("Counter", counterSchema, "counters");
