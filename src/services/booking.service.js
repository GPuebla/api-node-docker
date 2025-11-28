import Booking from "../models/booking.model";
import Route from "../models/route.model";
import Vessel from "../models/vessel.model";
import Line from "../models/line.model";
import Shipper from "../models/shipper.model";
import Consignee from "../models/consegnee.model"

class BookingService {

    // Crear un Booking
    async create(data) {
      return await Booking.create(data);
    }

    // Obtener todos los bookings
    async getAll(){
        return await Booking.find().Populate("route vessel line shipper consignee");
    }
    
};

export default new BookingService;