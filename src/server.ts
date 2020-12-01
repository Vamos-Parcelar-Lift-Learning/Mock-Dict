import * as dotenv from 'dotenv';
import * as jsonServer from 'json-server';
import * as routes from './routes.json';
import middlewares from './middlewares';

import errorHandler from './errors/handler';

dotenv.config();
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const port = process.env.PORT || 3000;

server.use(jsonServer.bodyParser);
server.use(jsonServer.rewriter(routes));
server.use(middlewares);
server.use(router);
server.use(errorHandler);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
