const express = require("express");
const apiRouter = require("../router/apiRouter");

const app = express();
// http://localhost:3000
app.get("/", (req, res) => {
    res.status(200).send("Service is up.");
});

// add api router
app.use("/api", apiRouter);

// error handling
app.use((req, res, next) => {
    console.log("Test");
    const error = new Error("Method Not Found");
    error.status = 404;
    next(error);
});

// send error as json in response
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
            method: req.method
        }
    });
})

module.exports = app;