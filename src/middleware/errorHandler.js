// src/middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
    console.error("🔥 Error detectado:", err.message);
  
    const status = err.status || 500;
  
    if (err.name === "ValidationError") {
      return res.status(400).json({
        message: "Error de validación",
        details: err.errors,
      });
    }
  
    if (err.name === "CastError") {
      return res.status(400).json({
        message: "ID inválido o formato incorrecto",
      });
    }
  
    res.status(status).json({
      message: err.message || "Error interno del servidor",
    });
  };

  export default errorHandler;
  