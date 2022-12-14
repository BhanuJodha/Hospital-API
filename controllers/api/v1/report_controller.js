const Report = require("../../../models/report");

exports.show = async (req, res) => {
    const enumValue = ["Negative", "Travelled-Quarantine", "Symptoms-Quarantine", "Positive-Admit"];
    try {
        if (!enumValue.find(value => value === req.params.status)){
            throw new Error("Invalid status name");
        }

        const reports = await Report.find({ status: req.params.status }).populate("doctor patient", "-password -reports -phone");

        return res.status(201).json({
            data: reports,
            message: "Reports with status : " + req.params.status
        })

    } catch (err) {
        res.status(400).json({
            data: null,
            message: err.message,
            possibleStatus: enumValue
        })
    }
}