const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleSaveErrors } = require("../helpers");

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  }

});

contactSchema.post("save", handleSaveErrors);

const addSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().required(),
  phone: Joi.string().min(3).max(30).required(),
});


const updateFavoriteSchemaSchema = Joi.object({

  favorite: Joi.boolean().required(),
});

const schemas = {
  addSchema,
  updateFavoriteSchemaSchema,

};

const Contact = model("contact", contactSchema);

module.exports = {
    Contact,
  schemas,
};

