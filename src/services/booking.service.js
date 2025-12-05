import Booking from "../models/booking.model";
import Port from "../models/port.model";
import Vessel from "../models/vessel.model";
import Line from "../models/line.model";
import Shipper from "../models/shipper.model";
import Consignee from "../models/consignee.model";

class BookingService {

    // Crear un Booking
    async create(data) {
      return await Booking.create(data);
    }

    // Obtener todos los bookings
    async getAll(){
        return await Booking.find().Populate("port vessel line shipper consignee");
    }

    // Obtener todos los bookings
    async getById(id){
        const booking = await Booking.findById(id).Populate("port vessel line shipper consignee");
        if(!booking) throw new Error("Booking not found")
        return booking
    }

    // Actualizar booking
    async update(id, data){
        const updatedBooking = await Booking.findByIdAndUpdate(id, data, {new:true});
        if(!updatedBooking) throw new Error("Booking not found")
        return updatedBooking
    }

       
    
};

export default new BookingService;