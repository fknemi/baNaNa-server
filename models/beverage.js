import { Schema, model } from "mongoose";
import validator from "validator";


const beverageSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    info: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    temp: {
        type: String,
        required: true,
        trim: true,
        set: (value) => value.toLowerCase()

    },

     timestamp: {
    type: String,
    default: new Date().getTime(),
  },
});





export const Beverage = model("Beverage", beverageSchema);
