const express = require('express');
const {
    StatusCodes
} = require('http-status-codes');
const ticketRouter = require('./createTicket');
const v1Router = express.Router();

v1Router.get('/ping', function (req, res) {
    return res.status(StatusCodes.OK).json({
        success: true,
        msg: "Everything seems fine!!"
    });
});

v1Router.use('/tickets', ticketRouter);

module.exports = v1Router;