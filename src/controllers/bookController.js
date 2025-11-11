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

const createBook = async (req, res) => {
  try {

    const {title, author} = req.body 

    const newBook = new Book ({
      title, 
      author
    });

    if(!title || !author){
      return res.status(400).json({message:'Faltan campos obligatorios'})
    }

    const savedBook = await newBook.save();
    res.status(200).json(savedBook);

  } catch (error) {
    console.error('Error al crear libro',error.message)
    res.status(500).json({message:'Error al crear libro'})

  }
}

const updateBook = async (req,res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;

    
    const updatedBook = await Book.findByIdAndUpdate(id, updatedData, {
      new: true, // devuelve el libro ya actualizado
      runValidators: true, // valida según el schema
    });

    res.json({
      message:"Libro actualizado correctamente",
      data: updatedBook,
    })

  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el libro", error: err.message });
  }
}

const deleteBook = async (req,res) => {
  try {

    const id = req.params.id;

    if(!id){
      return res.status(400).json({message:'El ID del libro es obligatorio'});
    }

    const deletedBook = await Book.findByIdAndDelete(id);

    if(!deletedBook){
      return res.status(404).json({message:'Libro no encontrado'})
    }

    res.status(200).json({
      message:'Libro correctamente eliminado',
      book: deletedBook
    })
    
  } catch (error) {
    console.error('Error interno del servidor');
    res.status(500).json({message:'Error interno del servidor'});
  }
  
}

export default {
  getBooks,
  getBookByID,
  createBook,
  updateBook,
  deleteBook
}