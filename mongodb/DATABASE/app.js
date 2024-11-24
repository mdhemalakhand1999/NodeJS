const express = require("express");
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.json || 8000;

// create schema for database.
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// Create a model for student object.
const Student = mongoose.model("Student", studentSchema);

app.get("/", (req, res) => {
  const StudentObj = new Student({
    name: "MD Kamal Akhand",
    age: 25,
  });

  StudentObj.save()
    .then((data) => {
      console.log(res.json(data));
    })
    .catch((err) => {
      console.log(err);
      res.send('Some Error Occured. We"re working on this');
    });
});

mongooseConnect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

async function mongooseConnect() {
  await mongoose.connect("mongodb://localhost:27017/local-pc");
}
