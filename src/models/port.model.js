import mongoose from 'mongoose'

const portSchema = new mongoose.Schema({
    name:{type: String, required: true, unique: true},
    contry: String,
})

export default new mongoose.model('Port',portSchema,'port')

