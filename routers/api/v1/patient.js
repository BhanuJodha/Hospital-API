const express = require("express");
const Router = express.Router();
const passport = require("passport");

const controller = require("../../../controllers/api/v1/patient_controller");

// Authenticate all requests from here
Router.use(passport.authenticate("jwt",{session: false}));

Router.post("/register", controller.register);

Router.post("/:id/create_report", controller.createReport);

Router.get("/:id/all_reports", controller.allReports);


module.exports = Router;