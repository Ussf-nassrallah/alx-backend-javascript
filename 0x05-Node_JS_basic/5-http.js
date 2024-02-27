/* Create a more complex HTTP server using Node's HTTP module */
const http = require('http');
const countStudents = require('./3-read_file_async');

const db = process.argv[2];

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;

  if (req.url === '/') {
    const text = 'Hello Holberton School!';
    res.end(text);
  }

  if (req.url === '/students') {
    res.write('This is the list of our students\n');

    countStudents(db).then((output) => {
      res.end(output);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
});

const port = 1245;
const host = '127.0.0.1';

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

module.exports = app;
