const axios = require('axios');
// const format = require('format');
const urls = require('../../config/urls');
const { wrap } = require('../../helpers/axios');

async function regions(req, res) {
    await wrap(req, res, (headers) => axios.get(urls.backend.api.locations.regions, { headers }));
}

module.exports = { regions };
