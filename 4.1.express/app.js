const express = require("express");
const app = express();

const PORT = process.env.PORT || 4322;

app.get("/", (req, res) => {
  res.send("<h3>App is listening</h3>");
});
app.get("/about", (req, res) => {
  res.send("<h3>Hi I'm About Page</h3>");
});
app.get("/json", (req, res) => {
  res.json({
    message: "Its from json page",
    name: "MD hemal akhand",
  });
});

app.get("*", (req, res) => {
  res.send("This is error page");
});
app.listen(PORT, () => {
  console.log("server running on " + PORT);
});
