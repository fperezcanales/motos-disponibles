const jwt = require('jsonwebtoken');
const { inspect } = require('util');
const config = require('../../config/config');
const { info } = require('../../logger');

function send401(res, error) {
    res.status(401).send({ errors: [error], status: 'UNAUTHORIZED', code: 401 });
}

function verify(req, res, next) {
    const token = req.get('x-user-token');

    if (!token) {
        send401(res, 'user token required');
        return;
    }

    if (process.env.NO_TOKEN_VERIFY === 'true') {
        next();
        return;
    }

    try {
        const userToken = jwt.verify(token, config.golem.pubKey);
        info(`user token: ${inspect(userToken)}`);
    } catch (err) {
        if (err instanceof jwt.TokenExpiredError) {
            send401(res, 'user token expired');
            return;
        }
        send401(res, 'invalid user token');
        return;
    }

    next();
}

module.exports = { verify };
