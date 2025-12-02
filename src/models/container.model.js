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

    transport: {type: Types.ObjectId, ref:"Transport", default:null},

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

export default model("Container",containerSchema,"containers");

