const { default: mongoose } = require("mongoose");
const Patient = require("../../../models/patient");
const Report = require("../../../models/report");

exports.register = async (req, res) => {
    try {
        let patient = await Patient.findOne({ phone: req.body.phone });

        if (patient) {
            return res.status(200).json({
                data: patient,
                message: "Patient details"
            });
        }
        else {
            // create new
            patient = await Patient.create({ ...req.body, hospital: req.user.hospital });
            res.status(201).json({
                data: patient,
                message: "Patient created successfully"
            })
        }

    } catch (err) {
        res.status(400).json({
            data: null,
            message: err.message
        })
    }
}

exports.createReport = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (patient) {
            // generate report
            const report = await Report.create({
                doctor: req.user._id,
                patient: patient._id,
                status: req.body.status
            })

            // attach report in patient document
            patient.reports.push(report._id);
            patient.save();

            await report.populate("doctor patient", "-password");
            return res.status(201).json({
                data: report,
                message: "Report generated successfully"
            })
        }
        // if patient not found
        else
            throw new Error("Invalid patient ID");
    } catch (err) {
        res.status(400).json({
            data: null,
            message: err.message,
            error: err.errors
        })
    }
}

exports.allReports = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (patient) {
            await patient.populate({
                path: "reports",
                sort: "-createdAt",
                select: "-patient",
                populate: {
                    path: "doctor",
                    select: "-password"
                }
            });

            return res.status(200).json({
                data: patient,
                message: "All reports"
            })
        }
        // if patient not found
        else
            throw new Error("Invalid patient ID");
    } catch (err) {
        res.status(400).json({
            data: null,
            message: err.message
        })
    }
}
