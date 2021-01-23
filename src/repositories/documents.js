const axios = require('axios');
const format = require('format');
const urls = require('../config/urls');

async function get(id, headers) {
    const response = await axios.get(format(urls.backend.api.health.auth, id), { headers });
    return response.data.document;
}

async function save(document, headers) {
    const response = await axios.post(urls.backend.api.health.auth, document, { headers });
    return response.data.document;
}

/*async function query(type, queries, headers) {
    const response = await axios.post(urls.backend.api.documents.query, { type, queries }, { headers });
    return response.data.documents;
}*/

module.exports = { get, save };
