import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    name: String,
    age: Number,
    nationality: String,
});

const Author = mongoose.model('author',authorSchema)

export default Author;