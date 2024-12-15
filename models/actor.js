import { Schema, model } from "mongoose";

import { movieSchema } from "./movie";
const actorSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    movies: [
        {
            invoice: {
                type: Schema.Types.ObjectId,
                ref: "Movie",
            },
        }

    ],



});





export const Actor = model("Actor", actorSchema);
