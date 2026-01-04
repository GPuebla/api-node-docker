import BaseService from "./base.service.js";
import Container from "../models/container.model.js";

const containerService = BaseService.createBaseService(Container, {
  populate: "booking transport",
});

/* =========================
   Métodos específicos
========================= */

// Contenedores por booking
containerService.getByBooking = (bookingId) => {
  return Container.find({ booking: bookingId });
};

// Reasignar settings reefer
containerService.reassignSettings = async (containerId, reservationSettings) => {
  const container = await containerService.getById(containerId);

  if (!container.isReefer) {
    throw new Error("Container is not reefer, cannot assign settings");
  }

  container.reeferSettings = reservationSettings;
  return container.save();
};

// Cambiar estado del contenedor
containerService.updateStatus = async (id, status) => {
  const container = await containerService.getById(id);
  container.status = status;
  return container.save();
};

export default containerService;
