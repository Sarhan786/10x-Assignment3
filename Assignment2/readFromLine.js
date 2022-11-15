const readline = require("readline");

const Line = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

Line.question("Please enter your name: ", (ans) => {
  console.log("Hello " + ans);
  Line.close();
});
