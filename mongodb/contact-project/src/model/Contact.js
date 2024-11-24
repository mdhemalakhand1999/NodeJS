const mongoose = require("mongoose");

const contactSchema = require("../schema/Contact");

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
