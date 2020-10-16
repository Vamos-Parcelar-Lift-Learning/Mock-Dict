import middlewareValidateDict from './validateDict';
import authMiddleware from './authMiddleware';

export default [authMiddleware, middlewareValidateDict];
