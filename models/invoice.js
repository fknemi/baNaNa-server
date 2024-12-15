import { Schema, model } from "mongoose";
import { userSchema } from "./user.js";


export const invoiceSchema = new Schema({
    user: userSchema,
    items: {
        type: String,
        required: true,
        trim: true,
    },
    total: {
        type: Number,
        required: true,
        trim: true,
    },
 timestamp: {
    type: String,
    default: new Date().getTime(),
  },

});





export const Invoice = model("Invoice", invoiceSchema);
