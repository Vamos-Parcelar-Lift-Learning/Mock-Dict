const middlewares = require('./middlewares');
import * as routes from './routes.json';
const jsonServer = require('json-server');

const server = jsonServer.create();
const port = process.env.PORT || 3000;
const router = jsonServer.router('./db.json');

router.db._.id = 'Key';

server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(jsonServer.rewriter(routes));

server.use(router);
server.listen(port);