/* Create a more complex HTTP server using Node's HTTP module */
const http = require('http');
const countStudents = require('./3-read_file_async');

const db = process.argv[2];

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    const text = 'Hello Holberton School!';

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', text.length);
    res.statusCode = 200;
    res.end(text);
  } else if (req.url === '/students') {
    console.log('This is the list of our students');

    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;
    countStudents(db);
  }
});

const port = 1245;
const host = '127.0.0.1';

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

module.exports = app;
