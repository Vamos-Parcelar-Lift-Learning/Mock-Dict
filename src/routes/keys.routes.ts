import { response, Router } from 'express';
import KeyController from '../controllers/KeyController'
const keysRouter = Router();
import KeysRepository from '../repositories/KeysRepository';

const keysRepository = new KeysRepository();
const keyController = new KeyController();
// keysRouter.get('/', (request, response) => {
//   const keys = keysRepository.all();
//   return response.json(keys);
// });
keysRouter.get('/', keyController.index);

keysRouter.post('/', keyController.create);
keysRouter.get('/:key', keyController.show);
// keysRouter.post('/', (request, response) => {
//   const { Account, KeyType, Key, Owner } = request.body;

//   const key = keysRepository.create({
//     Account,
//     KeyType,
//     Key,
//     Owner,
//   });

//   return response.json(key);
// });

export default keysRouter;
