import express from 'express';
import routes from './routes/index';

import './database';

const app = express();

app.use(express.json());

app.use(routes);
app.get('/', (request, response) => {
  return response.json({ msg: 'Hello Mock-Dict' });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server started on port 3000!');
});
