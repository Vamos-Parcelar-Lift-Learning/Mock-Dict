import { Router } from 'express';
import KeyController from '../controllers/KeyController';
const keysRouter = Router();

const keyController = new KeyController();

keysRouter.get('/', keyController.index);

keysRouter.post('/', keyController.create);
keysRouter.get('/:key', keyController.show);

export default keysRouter;
