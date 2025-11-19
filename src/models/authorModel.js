import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    name: String,
    age: Number,
    nationality: String,
});

const Author = mongoose.Model('author',authorSchema)

export default Author;