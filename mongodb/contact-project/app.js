const express = require("express");
const router = require("./src/routes/router");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3322;

app.use("/contacts", router);

connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  })
  .catch((e) => console.log(e));

async function connect() {
  await mongoose.connect("mongodb://localhost:27017/");
}
