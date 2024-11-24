const express = require("express");
const morgan = require("morgan"); // morgan is used for logged request type and time.
const userRouter = require("./router");
const postRouter = require("./postRouter");

const app = express();

// Morgan is used for logged http info.
app.use(morgan("dev"));

// Create custom middleware.
function commonMiddleware(_req, _res, next) {
  console.log("This is common middleware");
  next();
}

function tinyLogger() {
  return (req, _res, next) => {
    console.log(req.url, req.method);
    next();
  };
}

// Multiple middleware in an array.
const middleware = [commonMiddleware, tinyLogger()];

// custom middleware.
app.get("/hello", middleware, (req, res) => {
  res.send("<h1>Hello</h1>");
  res.end();
});

// Custom router.
app.use("/users", userRouter);
app.use("/posts", postRouter);

// Dynamic route.
app.get("/products/:productID/reviews/:reviewID", (req, res) => {
  res.send(
    "<h2>Product ID: " +
      req.params.productID +
      "<br/>Product Review ID: " +
      req.params.reviewID +
      "</h2>"
  );
});

// Run server.
const PROT = process.env.PORT || 4322;
app.listen(PROT, () => console.log(`server running on ${PROT}`));
