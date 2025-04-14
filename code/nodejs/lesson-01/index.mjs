import express from 'express';

const port = 8080;
const host = 'localhost';

const name = process.argv[2];

const data = [];

const app = express();

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send(`Hello ${name}!`);
});

app.get('/data', (req, res) => {
  res.send(data);
});

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
