const mongoose = require("mongoose");

const computerTypeSchema = new mongoose.Schema({
  Computer_Code: String,
  Gaming: Boolean,
  Office: Boolean,
  Graphic: Boolean,
}, {
  collection: 'computer_type'
});

const ComputerType = mongoose.model("ComputerType", computerTypeSchema);

module.exports = ComputerType;
