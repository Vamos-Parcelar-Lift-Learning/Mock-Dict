import * as dotenv from 'dotenv';
import * as jsonServer from 'json-server';
import authMiddleware from './middlewares/authMiddleware';

dotenv.config();
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const port = 3000;

server.use(jsonServer.bodyParser);
server.use(authMiddleware);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
