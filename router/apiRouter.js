const express = require("express");
const { apiService, apiServiceByTitle } = require("../services/apiService");
const apiRouter = express.Router();

apiRouter.get("", (req, res, next) => {
    apiService().then(result => {
        return res.status(200).json(result.data);
    })
    .catch(err => {
        return res.status(500).json({
            error: {
                message: error.message
            }
        });
    });
});

apiRouter.get("/:title", (req, res, next) => {
    apiServiceByTitle(req.params.title).then(result => {
        return res.status(200).json(result.data);
    })
    .catch(err => {
        return res.status(500).json({
            error: {
                message: err.message
            }
        });
    });
});


module.exports = apiRouter;