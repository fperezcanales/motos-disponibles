const express = require('express');
const endpoints = require('./endpoints');
const middlewares = require('./middlewares');

const { callAsync } = middlewares.error;

// api router, a.k.a '/api/*'
const api = express.Router();


api.get('/locations/regions', callAsync(endpoints.locations.regions));

// generic error handler
// SHOULD BE THE LAST HANDLER. NOTHING GO AFTER
// api.use(middlewares.error.handle);

module.exports = api;