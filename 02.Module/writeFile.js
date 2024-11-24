const fs = require("fs");
const userObj = {
  name: "MD Hemal Akhand",
  age: 25,
  gender: "Male",
  info: {
    type: "Developer",
    salary: 100000,
  },
};

const data = JSON.stringify(userObj);
fs.writeFile("user.json", data, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File written successfully");
  }
});
