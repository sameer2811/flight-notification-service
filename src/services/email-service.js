const {
    StatusCodes
} = require("http-status-codes");
const emailTransporter = require("../config/emailConfig");
const {
    AppError
} = require("../utils/errors");

class EmailService {
    constructor(repository) {
        this.repository = repository;
    }

    async createTicket(data) {
        try {
            const response = await this.repository.create(data);
            if (!response) {
                throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, "NOT_ABLE_TO_CREATE_TICKET");
            }
            return response;
        } catch (error) {
            if (error instanceof AppError) {
                throw error;
            }
            throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, error);
        }
    }

    async sendEmails(fromMail, toEmail, subject, text) {
        try {
            const response = await emailTransporter.sendMail({
                from: fromMail,
                to: toEmail,
                subject: subject,
                text: text
            });
            if (!response) {
                throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, "NOT_ABLE_TO_SEND_EMAIL_RESPONSE");
            }
            return response;
        } catch (error) {
            if (error instanceof AppError) {
                throw error;
            }
            throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, error);
        }
    }

    async getAllPendingEmails() {
        try {
            const response = await this.repository.findAllPendingEmails();
            if (!response) {
                throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, "NOT_ABLE_TO_FOUND_TICKETS");
            }
            return response;
        } catch (error) {
            if (error instanceof AppError) {
                throw error;
            }
            throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, error);
        }
    }
}
module.exports = EmailService;