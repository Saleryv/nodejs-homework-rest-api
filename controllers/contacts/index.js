const listContacts = require("./listContacts");
const getContactById = require("./getContactById");
const addContact = require("./addContact");
const updateContactById = require("./updateContactById");
const removeContactById = require("./removeContactById");
const updateFavoriteSchema = require("./updateFavoriteSchema")

module.exports = {
    listContacts,
    getContactById,
    addContact,
    updateContactById,
    removeContactById,
    updateFavoriteSchema,
}