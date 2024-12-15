import { Schema, model } from "mongoose";


const cinemaSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    phoneNo: {
        type: Number,
        required: true,
        trim: true,
    },
    location: {
        type: String,
        required: true,
        trim: true,

    },

     timestamp: {
    type: String,
    default: new Date().getTime(),
  },

});





export const Cinema = model("Cinema", cinemaSchema);
