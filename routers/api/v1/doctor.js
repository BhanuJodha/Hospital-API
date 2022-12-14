const express = require("express");
const Router = express.Router();

const controller = require("../../../controllers/api/v1/doctor_controller");

Router.post("/register", controller.register);

Router.get("/login", controller.login);

module.exports = Router;