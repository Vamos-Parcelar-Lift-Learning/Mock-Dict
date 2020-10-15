import * as dotenv from 'dotenv';
import db from './db';
import authMiddleware from './middlewares/authMiddleware';
import middlewareToken from './middlewares/tokenRequest';
import middlewareValidateDict from './middlewares/validateDict';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const jsonServer = require('json-server');

dotenv.config();
const server = jsonServer.create();
const router = jsonServer.router(db);
const port = 3000;

server.use(jsonServer.bodyParser);
server.use(authMiddleware);
server.use(middlewareToken);
server.use(middlewareValidateDict);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
