const config = require('./config');

module.exports = {
  backend: {
    api: {
      login: `${config.backend.url}/login`,
      health: {
        auth: `${config.backend.url}/health`,
      },
      locations: {
        regions: `${config.backend.url}/locations/regions`,
      },
    },
  },
};