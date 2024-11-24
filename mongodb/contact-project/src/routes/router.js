const {
  createContact,
  deleteContact,
  getAllContact,
  getSingleContact,
  updateContact,
} = require("../controller/Contact");

const router = require("express").Router();

router.get("/", getAllContact);
router.get("/:id", getSingleContact);
router.post("/", createContact);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);

module.exports = router;
