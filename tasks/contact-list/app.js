const express = require("express");
const router = require("./routes/contact");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;
app.use("/contacts", router);
app.listen(PORT, () => {
  console.log("app is running on ", PORT);
});
