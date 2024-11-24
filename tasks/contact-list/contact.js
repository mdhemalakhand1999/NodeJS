class contact {
  constructor() {
    this.contacts = {};
  }

  // create contact
  setContact(id, name, phone, email) {
    this.contacts[id] = {
      id,
      name,
      phone,
      email,
    };

    return this.contacts[id];
  }

  // get all contacts
  getContacts() {
    return this.contacts;
  }

  // get single contact
  getContact(id) {
    return this.contacts[id];
  }

  // delete contact
  deleteContact(id) {
    const isDelete = delete this.contacts[id];
    return isDelete;
  }

  // update contact
  updateContactByID(id, args) {
    this.contacts[id] = { ...this.contacts[id], ...args };
    return this.contacts[id];
  }
}

const contactObj = new contact();

module.exports = contactObj;
