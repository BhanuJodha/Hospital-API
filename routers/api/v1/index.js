const express = require("express");
const Router = express.Router();

Router.use("/doctor", require("./doctor"));

Router.use("/patients", require("./patient"));

Router.get("/reports/:status", require("../../../controllers/api/v1/report_controller").show);

module.exports = Router;