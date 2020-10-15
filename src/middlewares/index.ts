import middlewareToken from './tokenRequest';
import middlewareValidateDict from './validateDict';
import authMiddleware from './authMiddleware';

export default [authMiddleware, middlewareToken, middlewareValidateDict];
