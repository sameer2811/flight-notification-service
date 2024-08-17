const {
    Ticket
} = require('../models');
const {
    NOTIF_STATUS_ENUM
} = require("../utils/common/enums");

const CrudRepository = require('./crudRepository');
class TicketRepository extends CrudRepository {
    constructor() {
        super(Ticket);
    }

    async findAllPendingEmails() {
        const response = await Ticket.findAll({
            where: {
                status: NOTIF_STATUS_ENUM.PENDING
            }
        });
        return response;
    }
}
module.exports = TicketRepository;