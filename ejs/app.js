const express = require("express");
const morgan = require("morgan");
const app = express();

// common configuration.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// configure ejs
app.set("view engine", "ejs");

// Routing
app.get("/help", (req, res) => {
  res.render("pages/help", { title: "Help page" });
});
app.get("/about", (req, res) => {
  res.render("pages/about", { title: "About page" });
});
app.get("/", (req, res) => {
  const posts = [
    {
      title: "Post title 1",
      body: "Post Content 1",
      published: true,
    },
    {
      title: "Post title 2",
      body: "Post Content 2",
      published: true,
    },
    {
      title: "Post title 3",
      body: "Post Content 3",
      published: true,
    },
  ];
  res.render("pages/index", { title: "Welcome page", posts });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
