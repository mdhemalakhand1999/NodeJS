const fs = require("fs");

const data = fs.readFile("./user.json", (err, data) => {
  if (err) {
    return console.log(err);
  }

  const obj = JSON.parse(data);
  console.log(obj);
});
