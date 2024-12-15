import { Schema, model } from "mongoose";


const snackSchema = new Schema({
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
 timestamp: {
    type: String,
    default: new Date().getTime(),
  },
});





export const Snack = model("Snack", snackSchema);
