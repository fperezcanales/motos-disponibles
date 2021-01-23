const express = require('express');
const endpoints = require('./endpoints');

// api router, a.k.a '/api/*'
const api = express.Router();


// generic error handler
// SHOULD BE THE LAST HANDLER. NOTHING GO AFTER
// api.use(middlewares.error.handle);

module.exports = api;