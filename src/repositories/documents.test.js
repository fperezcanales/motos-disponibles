const axios = require('axios');
const format = require('format');
const urls = require('../config/urls');
const documents = require('./documents');

jest.mock('axios');

describe('Documents', () => {
    it('should save a document', async () => {
        const doc = {
            content: {
                some: 'value',
                active: true,
            },
        };

        const axiosRes = {
            status: 200,
            data: {
                status: 'OK',
                code: 200,
                document: {
                    id: 1345,
                    ...doc,
                },
            },
        };

        const headers = {
            'x-user-token': 'fake-token', 'x-request-id': 'fake-token',
        };

        axios.post.mockResolvedValue(axiosRes);

        const response = await documents.save(doc, headers);

        expect(response).toEqual(axiosRes.data.document);
        expect(axios.post).toBeCalledWith(urls.backend.api.health.auth, doc, {
            headers: { 'x-user-token': 'fake-token', 'x-request-id': 'fake-token' },
        });
    });

    it('should get a document', async () => {
        const id = 789;

        const axiosRes = {
            status: 200,
            data: {
                status: 'OK',
                code: 200,
                document: {
                    id,
                    content: {
                        foo: 'bar',
                    },
                },
            },
        };
        const headers = {
            'x-user-token': 'fake-token', 'x-request-id': 'fake-token',
        };
        axios.get.mockResolvedValue(axiosRes);

        const response = await documents.get(id, headers);

        expect(response).toEqual(axiosRes.data.document);
        expect(axios.get).toBeCalledWith(format(urls.backend.api.health.auth, id), {
            headers: { 'x-user-token': 'fake-token', 'x-request-id': 'fake-token' },
        });
    });
});
