const {
    StatusCodes
} = require("http-status-codes");
const {
    errorResponse
} = require("../utils/common");

async function createTicketValidator(req, res, next) {
    if (!req.body.recipientEmail) {
        errorResponse.description = 'recipientEmail property is not defined properly.';
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if (!req.body.subject) {
        errorResponse.description = 'subject property is not defined properly.';
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if (!req.body.content) {
        errorResponse.description = 'content property is not defined properly.';
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    next();
}
module.exports = createTicketValidator;