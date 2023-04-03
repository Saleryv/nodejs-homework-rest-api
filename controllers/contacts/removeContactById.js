const { Contact } = require("../../models/contact");

const { RequestError } = require("../../helpers");

const updateContactById = async (req, res) => {
  const { id } = req.params;
  const { _id: owner } = req.user;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true }, owner);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.status(201).json(result);
};

module.exports = updateContactById;