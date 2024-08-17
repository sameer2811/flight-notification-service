const express = require('express');
const appServer = express();
const serverConfig = require('./config/serverConfig');
const apiRouter = require('./routes');
const emailTransporter = require('./config/emailConfig');

// Setting up the middleWares to read the data coming in request body.
appServer.use(express.json());
appServer.use(express.text());
appServer.use(express.urlencoded({
    extended: true
}))

appServer.use('/api', apiRouter);

function startServer() {
    appServer.listen(serverConfig.PORT, async function () {
        console.log(`Server has started listening at the PORT ${serverConfig.PORT}`);
        // await emailTransporter.sendMail({
        //     from: serverConfig.GMAIL_EMAIL,
        //     to: 'sameersingh@playsimple.in',
        //     subject: 'Regarding Your Email Notif Setup',
        //     text: 'This is regarding to inform that your nodeMailer setup is done and you have implement this much. Sending you the architecture Image as a attachment.',
        //     attachments: [{
        //         filename: 'Architecture.png',
        //         path: './dummyAttachment/Screenshot 2024-07-22 at 3.07.21 PM.png' // Path to your file
        //     }]
        // });
        // console.log("Email Sent");
    });
}

startServer();