import BaseController from "../controllers/base.controller.js";
import bookingService from "../services/booking.service.js";

const bookingController = BaseController.createBaseController(bookingService);  

bookingController.getById = async (req, res) => {
  try {
    const booking = await bookingService.getById(req.params.id);
    res.json(booking);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

bookingController.getByBookingNumber = async (req, res) => {
  try {
    if (!req.params.bookingNumber) {
    return res.status(400).json({ error: "Booking number is required" });
    }
    const booking = await bookingService.getByBookingNumber(req.params.bookingNumber);
    res.json(booking);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

bookingController.updateBookingState = async (req, res) => {
  try {
    const updated = await bookingService.updateState(
      req.params.id,
      req.body.state
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default bookingController;
