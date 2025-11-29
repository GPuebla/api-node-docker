import mongoose from 'mongoose'

const operationSchema= new mongoose.Schema(
    {
        opNumber: {type: String, required: true, unique:true},
        booking: {type: Number, required: true},
    },
);

const Operation = mongoose.model("Operation",operationSchema,"operation")

export default Operation;