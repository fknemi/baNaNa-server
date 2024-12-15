import { Schema, model } from "mongoose";
import { userSchema } from "./user.js"
import { invoiceSchema } from "./invoice.js"

export const ticketSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: Date,
        required: true,
        trim: true,
    },
    timing: {
        type: String,
        required: true,
        trim: true,
    },

    format: {
        type: String,
        required: true,
        trim: true,
    },

    scanned: {
        type: Boolean,
        required: true,
    },
    cancelled: {
        type: Boolean,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },

    QRCode: {
        type: String,
        required: true,
        trim: true
    },
    entryTicket: {
        type: String,
        required: true,
        trim: true
    },
    expiresAt: {
        type: Date,
        required: true,
        trim: true
    },
    timestamp: {
        type: String,
        default: new Date().getTime(),
    },

    user:
    {

        type: Schema.Types.ObjectId,
        ref: "User",
    },

    invoice:
    {

        type: Schema.Types.ObjectId,
        ref: "Invoice",
    },

});





export const Ticket = model("Ticket", ticketSchema);
