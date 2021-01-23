function handle(err, req, res, next) {
    res.status(500).send({
        code: 500,
        status: 'Internal Server Error',
        errors: [err.message],
    });
    next(err);
}

const callAsync = handler => (req, res, next) => {
    Promise.resolve(handler(req, res, next)).catch(next);
};

module.exports = { handle, callAsync };
