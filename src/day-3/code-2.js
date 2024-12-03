import fs from "fs";

// Used in the reducer as "eval"
const mul = (a, b) => a * b;

const readAndCompute = (filePath) => {
  const data = fs.readFileSync(filePath, { encoding: "utf8" });

  const regexMul = /mul\(\d+,\d+\)/g;
  const regexStoppers = /do\(\)|don't\(\)/g;
  const regex = new RegExp(`${regexMul.source}|${regexStoppers.source}`, "g");

  const matches = data.trim().match(regex);

  let canCompute = true;

  const filteredMatches = matches.filter((match) => {
    if (match.match(regexStoppers)) {
      canCompute = !match.includes("don't");
      return false;
    }
    return canCompute;
  });

  return filteredMatches.reduce((acc, cur) => acc + eval(cur), 0);
};

try {
  const filePath = "src/day-3/input.txt";
  const result = readAndCompute(filePath);
  console.log(result);
} catch (error) {
  console.warn("Error reading the file:", error);
}
