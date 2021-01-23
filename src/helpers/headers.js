const uuid = require('uuid');

function createHeaders(token, requestId) {
    return {
        'x-user-token': token || '',
        'x-request-id': requestId || uuid.v4(),
    };
}

module.exports = { createHeaders };