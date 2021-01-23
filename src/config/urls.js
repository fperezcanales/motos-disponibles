const config = require('./config');

module.exports = {
  backend: {
    api: {
      login: `${config.backend.url}/login`,
      apc: {
        save: `${config.backend.url}/apc`,
        document: `${config.backend.url}/apc/%s/document`,
        list: `${config.backend.url}/apc`,
        signingProcess: `${config.backend.url}/apc/%s/signing-process`,
        signParticipants: `${config.backend.url}/apc/%s/sign-participants`,
        getById: `${config.backend.url}/apc/%s`,
      },
      locations: {
        regions: `${config.backend.url}/locations/regions`,
        cities: `${config.backend.url}/locations/regions/%s/cities`,
        communes: `${config.backend.url}/locations/cities/%s/communes`,
      },
      business: {
        chains: `${config.backend.url}/business/chains`,
        areas: `${config.backend.url}/business/areas`,
        departments: `${config.backend.url}/business/areas/%s/departments`,
        categories: `${config.backend.url}/business/departments/%s/categories`,
        paymentInfo: `${config.backend.url}/business/departments/%s/payment-info`,
      },
      allowances: {
        all: `${config.backend.url}/allowances`,
      },
      documents: {
        save: `${config.backend.url}/documents`,
        get: `${config.backend.url}/documents/%s`,
        delete: `${config.backend.url}/documents/%s`,
        query: `${config.backend.url}/documents/query`,
      },
      users: {
        hierarchy: `${config.backend.url}/user/%s/hierarchy`,
      },
      health: {
        auth: `${config.mesh.authUrl}/health`,
      },
    },
  },
};