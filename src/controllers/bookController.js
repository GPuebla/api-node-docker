import Book from "../models/bookModel.js";

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.error("Error al obtener libros:", error.message);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

const getBookByID = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Book.findById(id);

    if(!book){
      return res.status(404).json({message:"Book not found"});
    }
    res.status(200).json(book);

  } catch (error) {
    console.error("Error al obtener el libro del id",id, error.message);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export default {
  getBooks,
  getBookByID
}