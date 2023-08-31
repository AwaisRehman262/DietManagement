import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String
});

export const userModel = model("user",userSchema)