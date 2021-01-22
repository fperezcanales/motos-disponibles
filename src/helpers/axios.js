const logger = require('../logger');
const { createHeaders } = require('./headers');

async function wrap(req, res, block, send = res.send.bind(res)) {
    try {
        const headers = createHeaders(req.get('x-user-token'), req.get('x-request-id'));
        const response = await block(headers);
        res.status(response.status);
        send(response.data);
    } catch (error) {
        if (error.response) {
            const { status, data } = error.response;
            res.status(status).send(data);
        } else {
            logger.error(error.stack);
            res.sendStatus(500);
        }
    }
}

module.exports = { wrap };