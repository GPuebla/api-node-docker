import bookingService from "../services/booking.service";

class BookingController {

  // Crear contenedor
  async create(req, res) {
    try {
      const booking = await bookingService.create(req.body);
      res.status(201).json(booking);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  // Obtener todos
  async getAll(req, res) {
    try {
      const bookings = await bookingService.getAll();
      res.json(bookings);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // Obtener por ID
  async getById(req, res) {
    try {
      const booking = await bookingService.getById(req.params.id);
      res.json(booking);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

  // Actualizar contenedor
  async update(req, res) {
    try {
      const booking = await bookingService.update(req.params.id, req.body);
      res.json(booking);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  // Obtener por booking
  async getByBooking(req, res) {
    try {
      const bookings = await bookingService.getByBooking(req.params.bookingId);
      res.json(bookings);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  // Reasignar settings reefer
  async reassignSettings(req, res) {
    try {
      const updated = await bookingService.reassignSettings(
        req.params.id,
        req.body.settings
      );
      res.json(updated);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  // Actualizar estado del contenedor
  async updateStatus(req, res) {
    try {
      const updated = await bookingService.updateStatus(
        req.params.id,
        req.body.status
      );
      res.json(updated);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  // Obtener por ID
  async deleteById(req, res) {
    try {
      const deletedCotainer = await bookingService.deleteBooking(req.params.id);
      res.json(deletedCotainer);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

}

export default new BookingController();
