import { Schema, model } from "mongoose";


export const offerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    validity: {
        type: Date,
        required: true,
    },

    timestamp: {
        type: String,
        default: new Date().getTime(),
    },
});





export const Offer = model("Offer", offerSchema);
