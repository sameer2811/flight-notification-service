const express = require('express');
const appServer = express();
const serverConfig = require('./config/serverConfig');
const apiRouter = require('./routes');

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
    });
}

startServer();