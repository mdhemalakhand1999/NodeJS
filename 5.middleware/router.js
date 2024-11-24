const router = require("express").Router();

router.get("/login", (req, res) => {
  res.send("<h2>User logged in</h2>");
});

router.get("/logout", (req, res) => {
  res.send("<h2>User logged out</h2>");
});

module.exports = router;
