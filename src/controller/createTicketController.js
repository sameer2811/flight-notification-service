const {
    StatusCodes
} = require("http-status-codes");

const {
    successResponse,
    errorResponse
} = require("../utils/common");

const {
    TicketRepository
} = require("../repository");
const {
    EmailService
} = require("../services");


const emailService = new EmailService(new TicketRepository());

async function createTicketController(req, res) {
    try {
        let data = {
            recipientEmail: req.body.recipientEmail,
            subject: req.body.subject,
            content: req.body.content
        };
        const response = await emailService.createTicket(data);
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.status).json(errorResponse);
    }
}

module.exports = createTicketController;