import BaseService from "./base.service.js"
import Booking from "../models/bookingmodel.js"
import Port from "../models/port.model.js";
import Vessel from "../models/vesselmodel.js";
import Line from "../models/line.model.js";
import Shipper from "../models/shippermodel.js";
import Consignee from "../models/consignee.model.js";

// Create booking service using BaseService (generic CRUD)
const bookingService = BaseService.createBaseService(Booking, {
  populate: "POL POD vessel line shipper consignee",
});

/* =========================
   Business-specific methods
========================= */

// Get booking by booking number
bookingService.getByBookingNumber = async (number) => {
  const booking = await Booking
    .findOne({ number })
    .populate("POL POD vessel line shipper consignee");

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
