import { Schema, model } from "mongoose";
import validator from "validator"

export const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: (value) => {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email Address");
            }
        },
    },
    gender: {
        type: String,
        required: true,
        lowercase: true,
    },
    avatar: {
        type: String,
        required: false,
    },
    invoices: [
        {
            invoice: {
                type: Schema.Types.ObjectId,
                ref: "Invoice",
            },
        }

    ],
    tickets: [
        {
            invoice: {
                type: Schema.Types.ObjectId,
                ref: "Ticket",
            },
        }

    ],


    timestamp: {
        type: String,
        default: new Date().getTime(),
    },
});





export const User = model("User", userSchema);
