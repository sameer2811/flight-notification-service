const nodeMailer = require('nodemailer');
const {
    GMAIL_EMAIL,
    GMAIL_APP_PASSWORD
} = require('./serverConfig');

const emailTransporter = nodeMailer.createTransport({
    service: 'Gmail',
    auth: {
        user: GMAIL_EMAIL,
        pass: GMAIL_APP_PASSWORD
    }
});

module.exports = emailTransporter;