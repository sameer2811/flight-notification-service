const express = require('express');
const appServer = express();
const serverConfig = require('./config/serverConfig');

function startServer() {
    appServer.listen(serverConfig.PORT, async function () {
        console.log(`Server has started listening at the PORT ${serverConfig.PORT}`);
    });
}

startServer();