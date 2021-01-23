const assets = require('./endpoints/assets/assets');
const health = require('./endpoints/health/health');
const locations = require('./endpoints/locations/locations');
/*const business = require('./endpoints/business/business');
const login = require('./endpoints/login/login');
const users = require('./endpoints/users/users');
*/

module.exports = {
    assets,
    health,
    locations,
/*  apc,
    business,
    login,
    allowances,
    users,*/
};
