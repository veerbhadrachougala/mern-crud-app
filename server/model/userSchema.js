import mongoose from "mongoose";

// import autoIncrement from 'mongoose-auto-increment';

const userSchema = mongoose.Schema({
    fullname: String,
    username: String,
    email: String,
    phonenumber: String
});

// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, 'user');

export const User = mongoose.model('myuser', userSchema);

