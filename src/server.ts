import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'initial message' });
});

app.listen(3333, () => {
  console.log('Run server');
});