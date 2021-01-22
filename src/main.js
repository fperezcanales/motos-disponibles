const { info } = require('./logger');
const app = require('./app');

// start the app
const port = process.env.PORT || 5000;
app.listen(port);

info(`bff runnning at http://0.0.0.0:${port}/`);