import mongoose from "mongoose";

const { Schema, model, Types } = mongoose;

const containerSchema = new Schema({
    number: { type:String, required:true},
    size: { type:String, required:true, enum:["20'","40'"]},
    type: { type:String, required:true, enum:["ST","HS","HC","RHC"]},
    isReefer: {type:Boolean, default:false},

    reeferSettings: {
        temperature:{
            degrees:Number,
            temperatureUnit: {type:String, enum:['C','F'], default:'C'},
        },
        vent:Number,
        humidity:Number
    },

    booking: {type: Types.ObjectId, ref:"Booking", default:null},

    status: {
        type: String,
        enum: [
            "To Confirm",        // A Confirmar
            "Empty Picked Up",   // Vacío Retirado
            "Loaded",            // Cargado
            "Stacking In",       // Ingresado a Stacking
            "Off-Dock",          // Extraportuario
            "In Transit",        // En tránsito
            "At Destination Port", // En puerto destino
            "Empty Returned"     // Vacío Devuelto
        ],
        default: "To Confirm"     // A Confirmar
    }

}, {timestamps: true});

// Middleware to store previous booking before save operations
containerSchema.pre("save", async function (next) {
if (!this.isModified("booking")) return next();
if (this.isNew) return next();

const prev = await this.constructor
    .findById(this._id)
    .select("booking");

// Store previous booking in locals for use in post middleware
this.$locals.prevBooking = prev?.booking || null;

next();
});

// Middleware to handle booking updates on save
containerSchema.post("save", async function () {
const prevBookingId = this.$locals.prevBooking;
const newBookingId = this.booking;

// Remove from previous booking
    if (prevBookingId && !prevBookingId.equals(newBookingId)) {
        await mongoose.model("Booking").findByIdAndUpdate(prevBookingId, {
        $pull: { containers: this._id },
        });
    }

// Add to new booking
    if (newBookingId) {
        await mongoose.model("Booking").findByIdAndUpdate(newBookingId, {
        $addToSet: { containers: this._id },
        });
    }
});

  // Middleware to handle booking updates on findOneAndUpdate
containerSchema.post("findOneAndUpdate", async function (doc) {
if (!doc) return;

const prevBookingId = this.getOptions().locals?.prevBooking;
const newBookingId = doc.booking;

if (prevBookingId && !prevBookingId.equals(newBookingId)) {
    await mongoose.model("Booking").findByIdAndUpdate(prevBookingId, {
    $pull: { containers: doc._id },
    });
}

if (newBookingId) {
    await mongoose.model("Booking").findByIdAndUpdate(newBookingId, {
    $addToSet: { containers: doc._id },
    });
}
});
  
  
export default mongoose.models.Container || model("Container",containerSchema,"containers");

