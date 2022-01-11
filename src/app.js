// Define global variables
global.setting = require('./config/settings');

// Express modules
const express = require('express');
const compress = require('compression')
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const xss = require('xss-clean')
const cors = require('cors');

// Middlewares
const { notFoundHandler, errorHandler } = require('./middleware/errorHandler')

// Create app
const app = express();

// App uses
app.use(compress()) // gzip compression
app.use(methodOverride()) // lets you use HTTP verbs
app.use(helmet()); // secure apps by setting various HTTP headers
app.use(morgan('dev')); // Simple logger
app.use(cors()) // enable cors
app.use(xss()) // handler xss attack
app.use(cookieParser()); // cookie parser for cookie management
app.use(bodyParser.json({ limit: '200kb' }));
app.use(bodyParser.urlencoded({ extended: false }));

// Use router
app.use('/', require('./routes/index'));

// Use middlware
app.use(notFoundHandler) // 404 request handler
app.use(errorHandler) // 500 internal error request handler

// Export app
module.exports = app;