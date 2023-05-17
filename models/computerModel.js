const mongoose = require("mongoose");

const computerSchema = new mongoose.Schema({
  Computer_Code: String,
  Computer_Name: String,
}, {
  collection: 'computer'
});

const Computer = mongoose.model("Computer", computerSchema);

module.exports = Computer;
