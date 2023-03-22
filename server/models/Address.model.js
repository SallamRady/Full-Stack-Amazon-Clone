const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  country: {
    type: Schema.Types.String,
    required: true,
  },
  city: {
    type: Schema.Types.String,
    required: true,
  },
  state: {
    type: Schema.Types.String,
  },
  street: {
    type: Schema.Types.String,
  },
  postalCode: {
    type: Schema.Types.Number,
    required: true,
  },
});

module.exports = mongoose.model("Address", addressSchema);
