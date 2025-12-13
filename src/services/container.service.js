  import Container from "../models/container.model.js";
  import Transport from "../models/transport.model.js";
  import Booking from "../models/booking.model.js";



  class ContainerService {

    // Crear un contenedor
    async create(data) {
      return await Container.create(data);
    }

    // Obtener todos los contenedores
    async getAll() {
      return await Container.find().populate("booking transport");
    }

    // Obtener uno por ID
    async getById(id) {
      const container = await Container.findById(id).populate("booking transport");
      if (!container) throw new Error("Container not found");
      return container;
    }

    // Actualizar contenedor
    async update(id, data) {
      const updated = await Container.findByIdAndUpdate(id, data, { new: true, runValidators: true });
      if (!updated) throw new Error("Container not found");
      return updated;
    }

    // Contenedores por booking (el metodo find devuelve un array)
    async getByBooking(bookingId) {
      return await Container.find({ booking: bookingId });
    }

    // Reasignar settings reefer
    async reassignSettings(containerId, reservationSettings) {
      const container = await this.getById(containerId);

      if (!container.isReefer) {
        throw new Error("Container is not reefer, cannot assign settings");
      }

      container.reeferSettings = reservationSettings;

      return await container.save();
    }

    // Cambiar estado del contenedor
    async updateStatus(id, status) {
      const cont = await this.getById(id);
      cont.status = status;
      return await cont.save();
    }

    // Eliminar contenedor
     async deleteContainer(id) {
      const container = await Container.findByIdAndDelete(id);

      if (!container) {
        throw new Error("Container not found");
      }
      
      return container;
    }

  }

  export default new ContainerService();
