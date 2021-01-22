const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const endpoints = require('./endpoints');
const api = require('./api');

// main router
const app = express();

// setup the middlewares
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../build')));

// routes
app.use('/api', api);
app.get('/health', endpoints.health.check);
app.get('*', endpoints.assets);

module.exports = app;