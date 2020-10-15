const middlewareToken = require('./tokenRequest');
const middlewareValidateDict = require('./validateDict');
const authMiddleware = require('./authMiddleware');

export default [authMiddleware, middlewareToken, middlewareValidateDict];
