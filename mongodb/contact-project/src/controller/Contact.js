const Contact = require("../model/Contact");

exports.getAllContact = (req, res) => {
  Contact.find()
    .then((contacts) => {
      res.json(contacts);
    })
    .catch((e) => {
      console.log(e);
      res.send(
        'Some error occured when try to fetch contact. We"re working on it'
      );
    });
};
exports.getSingleContact = (req, res) => {
  const { id } = req.params;
  Contact.findById(id)
    .then((contact) => {
      res.json(contact);
    })
    .catch((e) => {
      console.log(e);
      res.send(
        'Some error occured when try to fetch contact. We"re working on it'
      );
    });
};
exports.createContact = (req, res) => {
  const { name, email, phone } = req.body;
  const contact = new Contact({
    name,
    email,
    phone,
  });
  contact
    .save()
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.send("Something error occured");
    });
};
exports.updateContact = (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;

  Contact.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $set: {
        name,
        email,
        phone,
      },
    },
    { new: true }
  )
    .then((contact) => res.json(contact))
    .catch((e) => {
      console.log(e);
      res.send("some error occured");
    });
};
exports.deleteContact = (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;

  Contact.findOneAndDelete({
    _id: id,
  })
    .then((contact) => {
      res.send(contact);
    })
    .catch((e) => {
      console.log(e);
      res.send("some error occured");
    });
};
