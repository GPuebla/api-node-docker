import bookingService from "../services/booking.service";

class BookingController {

  // Creating booking
  async create(req, res) {
    try {
      const booking = await bookingService.create(req.body);
      res.status(201).json(booking);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  // Getting all bookings
  async getAll(req, res) {
    try {
      const bookings = await bookingService.getAll();
      res.json(bookings);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // Getting booking by ID
  async getById(req, res) {
    try {
      const booking = await bookingService.getById(req.params.id);
      res.json(booking);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

  // Getting booking by number
  async getByBookingNumber(req, res) {
    try {
      if (!req.params.bookingNumber) {
      return res.status(400).json({ error: "Booking number is required" });
      }
      const booking = await bookingService.getByBookingNumber(req.params.bookingNumber);
      res.json(booking);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

  // Updating booking
  async update(req, res) {
    try {
      const booking = await bookingService.update(req.params.id, req.body);
      res.json(booking);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  // Actualizar estado del booking
  async updateBookingState(req, res) {
    try {
      const updated = await bookingService.updateState(
        req.params.id,
        req.body.state
      );
      res.json(updated);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  // Obtener por ID
  async deleteById(req, res) {
    try {
      const deletedBooking = await bookingService.deleteBooking(req.params.id);
      res.json(deletedBooking);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

}

export default new BookingController();
