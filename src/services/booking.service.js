import BaseService from "./base.service.js"
import Booking from "../models/booking.model.js"
import Port from "../models/port.model.js";
import Vessel from "../models/vessel.model.js";
import Line from "../models/line.model.js";
import Shipper from "../models/shipper.model.js";
import Consignee from "../models/consignee.model.js";

// Create booking service using BaseService (generic CRUD)
const bookingService = BaseService.createBaseService(Booking, {
  populate: "POL POD vessel line shipper consignee containers",
});

/* =========================
   Business-specific methods
========================= */

// Get booking by booking number
bookingService.getByBookingNumber = async (number) => {
  const booking = await Booking
    .findOne({ number })
    .populate("POL POD vessel line shipper consignee containers");

  if (!booking) {
    throw new Error("Booking not found");
  }

  return booking;
};

// Update booking status/state
bookingService.updateState = async (id, state) => {
  const booking = await bookingService.getById(id);
  booking.state = state;
  return booking.save();
};

export default bookingService;
