import BaseController from "./base.controller.js";
import containerService from "../services/container.service.js";

// 1️⃣ Crear controller base (CRUD)
const containerController = BaseController.createBaseController(containerService);

// 2️⃣ Agregar SOLO métodos custom

// Obtener por booking
containerController.getByBooking = async (req, res, next) => {
  try {
    const containers = await containerService.getByBooking(
      req.params.bookingId
    );
    res.json(containers);
  } catch (error) {
    next(error);
  }
};

// Reasignar settings reefer
containerController.reassignSettings = async (req, res, next) => {
  try {
    const updated = await containerService.reassignSettings(
      req.params.id,
      req.body.settings
    );
    res.json(updated);
  } catch (error) {
    next(error);
  }
};

// Actualizar estado
containerController.updateStatus = async (req, res, next) => {
  try {
    const updated = await containerService.updateStatus(
      req.params.id,
      req.body.status
    );
    res.json(updated);
  } catch (error) {
    next(error);
  }
};

export default containerController;

