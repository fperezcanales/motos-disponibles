const config = require('./config');

function isEnabled(featureName) {
    return config.toggles && config.toggles[featureName];
};

module.exports = {
    isEnabled
};