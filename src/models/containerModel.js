import mongoose from "mongoose";

const { Schema, model, Types } = mongoose;

const containerSchema = new Schema({
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
            "A Confirmar",
            "Vacio Retirado",
            "Cargado",
            "Ingresado a Stacking",
            "Extraportuario",
            "En tránsito",
            "En puerto destino",
            "Vacio Devuelto"
        ],
        default: "A Confirmar"
    }
}, {timestamps: true});

export default model("Container",containerSchema,"containers");

