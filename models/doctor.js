const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    phone: {
        type: String,
        required: true,
        unique: true,
        minLength: 10,
        maxLength: 10
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20,
        uppercase: true
    },
    age: {
        type: Number,
        min: 18,
        max: 90,
        required: true
    },
    hospital: {
        type: String,
        minLength: 3,
        maxLength: 20,
        uppercase: true,
        required: true
    }
}, {
    timestamps: true
})

const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;