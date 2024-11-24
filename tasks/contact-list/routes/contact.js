const {
  getAllContact,
  createContact,
  getSingleContact,
  deleteContact,
  updateContact,
} = require("../controller/contact");

const router = require("express").Router();

router.get("/", getAllContact);

router.post("/", createContact);

router.get("/:id", getSingleContact);

router.delete("/:id", deleteContact);

router.put("/:id", updateContact);

module.exports = router;
