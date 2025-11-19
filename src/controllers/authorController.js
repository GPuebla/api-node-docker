import Author from '../models/authorModel'

const createAuthor = async (req,res,next) => {

    try {
      const exist = await Author.findOne({name:req.body.name});
      
      if(exist){
        const error = new Error('El autor ya existe')
        error.status = 400
        throw error
      }
        const createdAuthor = new Author(req.body);
        await createdAuthor.save();
        res.status(201).json(createdAuthor);

    } catch (error) {
       next(error) 
    }

}

export default createAuthor;