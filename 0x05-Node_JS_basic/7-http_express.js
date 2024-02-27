/* Create a small HTTP server using Express */
const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const dbFile = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(dbFile).then((output) => {
    res.send(['This is the list of our students\n', output].join(''));
  }).catch(() => {
    res.send('Cannot load the database');
  });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

module.exports = app;
