/* 4. Create a small HTTP server using Node's HTTP module */
const http = require('http');

const app = http.createServer((req, res) => {
  const text = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', text.length);
  res.statusCode = 200;
  res.end(text);
});

const port = 1245;
const host = '127.0.0.1';

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
