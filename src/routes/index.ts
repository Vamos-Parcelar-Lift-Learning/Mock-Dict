import { Router } from 'express';
import keysRouter from './keys.routes';

const routes = Router();

routes.use('/api', keysRouter);

export default routes;
