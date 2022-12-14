const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    phone: {
        type: String,
        required: true,
        unique: true,
        minLength: 10,
        maxLength: 10
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
        min: 1,
        max: 100,
        required: true
    },
    hospital: {
        type: String,
        minLength: 3,
        maxLength: 20,
        uppercase: true,
        required: true
    },
    reports: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Report"
        }
    ]
}, {
    timestamps: true
})

const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;