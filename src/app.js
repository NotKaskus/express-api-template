// Define global variables
global.setting = require('./config/settings');

// Express modules
const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create app
const app = express();

// App uses
app.use(helmet());
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Use router
app.use('/', require('./routes/index'));


// Export app
module.exports = app;