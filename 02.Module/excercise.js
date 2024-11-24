const http = require("http");
const fs = require("fs");

// Create a server.
const server = http.createServer((req, res) => {
  fs.readFile("./index.html", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.write(data.toString());
      res.end();
    }
  });
});

// Start the server.
server.listen(4000, () => {
  console.log("server running at 4000");
});
