const axios = require('axios');
const urls = require('../../config/urls');
const { wrap } = require('../../helpers/axios');

async function check(req, res) {
    res.sendStatus(200);
}

async function authCheck(req, res) {
    await wrap(req, res, (headers) => axios.get(urls.backend.api.health.auth, req.body, { headers }));
}

module.exports = { check, authCheck };