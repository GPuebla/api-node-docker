import mongoose from 'mongoose'
const { Schema, model } = mongoose;

const portSchema = new Schema({
    name:{type: String, required: true, unique: true},
    country: String,
})

export default mongoose.models.Port || model('Port',portSchema,'ports')

