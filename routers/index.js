const express = require("express");
const Router = express.Router();

// redirecting APIs request
Router.use("/api", require("./api/index"));

module.exports = Router;