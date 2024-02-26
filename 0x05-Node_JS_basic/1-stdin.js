/* Process stdin */

// display the message 'Welcome to Holberton School, what is your name?'
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// read input from the user
process.stdin.on('readable', () => {
  const data = process.stdin.read();
  // check if input exists
  if (data) {
    // disply the output to the user
    process.stdout.write(`Your name is: ${data}`);
  }
});

// display 'This important software is now closing'
// when the user ends the program
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
