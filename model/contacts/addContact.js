const updateContacts = require("./updateContacts");
const listContacts = require("./listContacts");

const { v4 } = require("uuid");

const addContact = async ({ name, email, phone }) => {
  const contacts = await listContacts();
  const newContact = { id: v4(), name, email, phone };
  allContacts.push(newContact);

  contacts.push(newContact);
  updateContacts(contacts);

  return newContact;
};

module.exports = addContact;
