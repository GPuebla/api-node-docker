const error = (req,res,next) => {
    const error = new Error("Ruta no encontrada");
    error.status = 400;
    next(error);
};

export default error