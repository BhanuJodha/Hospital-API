const Doctor = require("../../../models/doctor");
const jwt = require("jsonwebtoken");
const env = require("../../../config/environment");

exports.register = (req, res) => {
    Doctor.create(req.body, (err, doctor) => {
        if (err) {
            return res.status(400).json({
                data: null,
                message: err.message
            })
        }

        doctor.password = undefined;
        res.status(201).json({
            data: doctor,
            message: "Doctor created successfully"
        })
    })
}

exports.login = (req, res) => {
    Doctor.findOne({phone: req.body.phone}, (err, doctor) => {
        if (err) {
            return res.status(400).json({
                data: null,
                message: err.message
            })
        }

        if (doctor && doctor.password === req.body.password) {
            return res.status(200).json({
                data: jwt.sign({_id: doctor.id}, env.jwt_secret, {expiresIn: "1000000"}),
                message: "Token created successfully"
            })
        }

        return res.status(401).json({
            data: null,
            message: "Invalid credentials"
        })
    })
}