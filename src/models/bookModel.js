import mongoose from 'mongoose'

const bookSckema = new mongoose.Schema({
    title: {type: String, required: true },
    author: {type: String, required: true }
});

const Book = mongoose.model("Book",bookSckema,"books")

export default Book;
