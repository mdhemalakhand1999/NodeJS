const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end("<h1>Hello from HTTP.js</h1>");
});

server.listen(4000, () => {
  console.log("Server running at 4000");
});
