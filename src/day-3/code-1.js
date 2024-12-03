const fs = require("fs");

// Used in the reducer as "eval"
const mul = (a, b) => a * b;

const readAndCompute = (filePath) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    const regex = /mul\(\d+,\d+\)/g;
    const matches = data.trim().match(regex);
    const sum = matches.reduce((acc, cur) => acc + eval(cur), 0);
    console.log(sum);
  });
};

try {
  const filePath = "input.txt";
  readAndCompute(filePath);
} catch (error) {
  console.warn("Error reading the file:", error);
}
