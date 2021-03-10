const http = require("http");
const fs = require("fs");
const path = require("path");
const { Readable } = require("stream");

const file = path.resolve(__dirname, "../assets/input.txt");

const server = http.createServer((req, res) => {
  const input = fs
    .readFileSync(file, "utf-8")
    .split("\n")
    .map((x) => eval(x).toString());
  res.end(`${input.map((x) => x).join("\n")}`);
});
server.listen(1234);