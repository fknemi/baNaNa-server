import { Schema, model } from "mongoose";
import validator from "validator";


const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
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
});





export const User = model("User", userSchema);