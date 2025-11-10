import Book from "../models/bookModel.js";

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find(); // busca todos los documentos
    res.status(200).json(books);
  } catch (error) {
    console.error("Error al obtener libros:", error.message);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
