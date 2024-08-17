const express = require('express');
const {
    createTicketValidator
} = require('../../validators');

const {
    createTicketController
} = require('../../controller');

const ticketRouter = express.Router();

ticketRouter.post('/', createTicketValidator, createTicketController)

module.exports = ticketRouter;