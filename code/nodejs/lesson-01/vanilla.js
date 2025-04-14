const http = require('node:http');

const port = 8080;
const host = 'localhost';

const name = process.argv[2];

const data = [];

function sendHello(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello ${name}`);
}

function sendData(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      sendHello(req, res);
      break;
    case '/data':
      sendData(req, res);
      break;
    default:
      res.statusCode = 404;
      res.end('Not found');
  }
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
