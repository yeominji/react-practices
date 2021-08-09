
(function(){
    const express = require('express');
    const session = require('express-session');
    const http = require('http');
    const path = require('path');
    const dotenv = require('dotenv');

    // 1. Environment Variables
    dotenv.config({path: path.join(__dirname, 'app.config.env')})

    // 2. Application Routers
    const { applicationRouter } = require('./routes');

    // 3. Logger
    const logger = require('./logging');

    // 4. Application Setup
    const application = express()
        // 4-1. Session Environment
        .use(session({ 
            secret: process.env.SESSION_SECRET,
            resave: false,
            saveUninitialized: false  
        }))
        // 4-2. Body Parsers
        .use(express.json())
        .use(express.urlencoded({extended: true}))
        // 4-3. Static
        .use(express.static(path.join(__dirname, process.env.STATIC_RESOURCES_DIRECTORY)))
        // 4-4. View Engine Setup
        .set('views', path.join(__dirname, 'views'))
        .set('view engine', 'ejs');

    // 5. Application Router Setup
    applicationRouter.setup(application);

    // 6. Server Startup
    http.createServer(application)
        .on('listening', function(){
            logger.info('Listening on port ' + process.env.PORT );
        })
        .on('error', function(error) {
            if(error.syscall !== 'listen') {
                throw error;
            }
            switch(error.code) {
                case 'EACCES':
                    logger.error('Port ' + process.env.PORT  + ' requires elevated privileges');
                    process.exit(1);
                    break;
                case 'EADDRINUSE':
                    logger.error('Port ' + process.env.PORT  + ' is already in use');
                    process.exit(1);
                    break;
                default:
                    throw error;
            }
        })
        .listen(process.env.PORT);
})();