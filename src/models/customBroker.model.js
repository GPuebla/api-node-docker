import mongoose from "mongoose";

const {Schema, model, Types} = mongoose;

const customsBrokerSchema = new Schema({
    companyName: {type:String, required:true, unique:true},
    contacts: { type:[{type:Types.ObjectId, ref: "Contact"}], default:[]}
});

export default model('CustomBroker',customsBrokerSchema,'customBroker');

