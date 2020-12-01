import middlewareValidateDict from './validateDict';
import authMiddleware from './authMiddleware';
import validateBody from './validateBody';

export default [authMiddleware, middlewareValidateDict, validateBody];
