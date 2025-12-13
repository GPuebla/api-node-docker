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
        return await Booking.find().populate("POL POD vessel line shipper consignee");
    }

    // Obtener booking por ID
    async getById(id){
        const booking = await Booking.findById(id).populate("POL POD vessel line shipper consignee");
        if(!booking) throw new Error("Booking not found")
        return booking
    }

    // Obtener booking por numero de booking
    async getByBookingNumber(number){
        const booking = await Booking.findOne({number}).populate("POL POD vessel line shipper consignee");
        if(!booking) throw new Error("Booking not found")
        return booking
    }

    // Actualizar booking
    async update(id, data){
        const updatedBooking = await Booking.findByIdAndUpdate(id, data, {new:true,  runValidators: true});
        if(!updatedBooking) throw new Error("Booking not found")
        return updatedBooking
    }

    // Change booking state
    async updateState(id, state){
        const booking = await this.getById(id);
        booking.status = state;
        return await booking.save();
    }

    //Eliminar contenedor
    async deleteBooking(id){
        const booking = await Booking.findByIdAndDelete(id);
        if(!booking) throw new Error ('Booking not found');
        return booking;
    }
    
};

export default new BookingService;