const contactsOperations = require("../../model/contacts");

const add = async (req, res) => {
  const { error } = contactsSchema.validate(req.body);
  if (error) {
    error.status = 400;
    throw error;
  }
  const result = await contactsOperations.addContact(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = add;
