const express = require("express");
const app = express();
const port = 8000;

// Initialize mongoDB
require("./config/mongoose");

// Initialize passport
const passport = require("./config/passport_jwt");
app.use(passport.initialize());

// extracting body
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// setting external router
app.use(require("./routers/index"));

// server start
app.listen(port, (err) => {
    if (err) {
        return console.error("Error in starting server :", err);
    }
    console.log("Server is listening on port", port);
})