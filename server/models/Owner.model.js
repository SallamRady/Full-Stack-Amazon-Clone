const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ownerSchema = new Schema({
  name:Schema.Types.String,
  about:Schema.Types.String,
  photo:Schema.Types.String,

});

module.exports = mongoose.model("Owner", ownerSchema);
