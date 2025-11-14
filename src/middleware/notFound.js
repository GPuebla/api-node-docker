const error = (req,res,next) => {
    const error = new Error("Esta ruta no existe");
    error.status = 400;
    next(error);
};

export default error