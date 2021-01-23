const jwt = require('jsonwebtoken');
const { verify } = require('./token');

jest.mock('jsonwebtoken');
jest.mock('../../logger');

describe('token.verify', () => {
    beforeEach(() => {
        delete process.env.NO_TOKEN_VERIFY;
    });

    it('should skip then token verification when env.NO_TOKEN_VERIFY is true', () => {
        const next = jest.fn();
        const req = {
            path: '/api/apc',
            get: jest.fn().mockReturnValue('valid_user_token'),
        };
        const res = {};

        process.env.NO_TOKEN_VERIFY = 'true';

        verify(req, res, next);

        expect(next).toHaveBeenCalled();
        expect(jwt.verify).not.toHaveBeenCalled();
    });

    it('should continue with the call stack when the token is valid', () => {
        const next = jest.fn();
        const req = {
            path: '/api/apc',
            get: jest.fn().mockReturnValue('valid_user_token'),
        };
        const res = {};

        jwt.verify.mockReturnValue('verified user token');

        verify(req, res, next);

        expect(next).toHaveBeenCalled();
        expect(jwt.verify).toHaveBeenCalled();
    });

    it('should respond a 401 when no user token header is found', () => {
        const next = jest.fn();
        const req = {
            path: '/api/apc',
            get: jest.fn(),
        };
        const send = jest.fn();
        const res = {
            status: jest.fn().mockReturnValue({ send }),
        };

        verify(req, res, next);

        expect(next).not.toBeCalled();
        expect(res.status).toBeCalledWith(401);
        expect(send.mock.calls[0][0].errors).toStrictEqual(['user token required']);
    });

    it('should respond a 401 when the user token is invalid', () => {
        const next = jest.fn();
        const req = {
            path: '/api/apc',
            get: jest.fn().mockReturnValue('invalid_token'),
        };
        const send = jest.fn();
        const res = {
            status: jest.fn().mockReturnValue({ send }),
        };

        jwt.verify.mockImplementation(() => {
            throw new Error('not possible to parse the token');
        });

        verify(req, res, next);

        expect(next).not.toBeCalled();
        expect(res.status).toBeCalledWith(401);
        expect(send.mock.calls[0][0].errors).toStrictEqual(['invalid user token']);
    });

    it('should respond a 401 when the user token is expired', () => {
        const next = jest.fn();
        const req = {
            path: '/api/apc',
            get: jest.fn().mockReturnValue('expired_token'),
        };
        const send = jest.fn();
        const res = {
            status: jest.fn().mockReturnValue({ send }),
        };

        jwt.verify.mockImplementation(() => {
            throw new jwt.TokenExpiredError('token expired');
        });

        verify(req, res, next);

        expect(next).not.toBeCalled();
        expect(res.status).toBeCalledWith(401);
        expect(send.mock.calls[0][0].errors).toStrictEqual(['user token expired']);
    });
});
