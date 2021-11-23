const contactsOperations = require("../../model/contacts");
const { NotFound } = require("http-errors");

const getByid = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperations.getById(contactId);
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: { result },
  });
};
module.exports = getByid;
