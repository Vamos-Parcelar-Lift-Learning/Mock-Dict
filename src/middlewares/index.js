const middlewareToken = require('./tokenRequest');
const middlewareValidateDict = require('./validateDict');

module.exports = [middlewareToken, middlewareValidateDict];
