const contactsOperations = require("../../model/contacts");
const { NotFound } = require("http-errors");

const updateById = async (req, res) => {
  const { error } = contactsSchema.validate(req.body);
  if (error) {
    error.status = 400;
    throw error;
  }
  const { contactId } = req.params;
  const result = await contactsOperations.updateContactById(
    contactId,
    req.body
  );
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};
module.exports = updateById;
