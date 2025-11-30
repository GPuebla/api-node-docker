import mongoose from "mongoose"
const { Schema, model } = mongoose;

const operationSchema= new Schema(
    {
        opNumber: {type: String, required: true, unique:true},
        booking: {type: Number, required: true},
    },
);

export default model("Operation",operationSchema,"operation")