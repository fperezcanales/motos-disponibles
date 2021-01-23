const { handle } = require('./error');

describe('Error', () => {
    it('should send the error message to the client', () => {
        const err = new Error('the cake is a lie');
        const req = null;
        const send = jest.fn();
        const res = { status: jest.fn().mockReturnValue({ send }) };
        const next = jest.fn();

        handle(err, req, res, next);

        expect(res.status).toBeCalledWith(500);
        expect(send).toBeCalledWith({
            code: 500,
            status: 'Internal Server Error',
            errors: ['the cake is a lie']
        });
        expect(next).toBeCalledWith(err);
    });
});
