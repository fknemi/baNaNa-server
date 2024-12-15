import { Schema, model } from "mongoose";


export const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        trim: true,
    },
    ageRating: {
        type: String,
        required: true,
    },

    ageLimit: {
        type: Number,
        required: false
    },
 timestamp: {
    type: String,
    default: new Date().getTime(),
  },

});





export const Movie = model("Movie", movieSchema);
