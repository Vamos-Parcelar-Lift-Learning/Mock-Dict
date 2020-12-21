import { Router } from 'express';
import keysRouter from './keys.routes';

const routes = Router();

routes.use('/keys', keysRouter);

export default routes;
