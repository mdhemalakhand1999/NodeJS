const contactObj = require("../contact");

const getAllContact = (_req, res) => {
  res.json(contactObj.getContacts());
};

const createContact = (req, res) => {
  const { id, name, phone, email } = req.body;

  const createdContact = contactObj.setContact(id, name, phone, email);
  res.json(createdContact);
  res.end();
};

const getSingleContact = (req, res) => {
  const { id } = req.params;
  res.json(contactObj.getContact(id));
};

const deleteContact = (req, res) => {
  const { id } = req.params;

  res.json(contactObj.deleteContact(id));
};

const updateContact = (req, res) => {
  const { id } = req.params;
  const { name, phone, email } = req.body;
  const contact = contactObj.updateContactByID(id, {
    name,
    phone,
    email,
  });
  res.send(contact);
};

module.exports = {
  getAllContact,
  createContact,
  getSingleContact,
  deleteContact,
  updateContact,
};
