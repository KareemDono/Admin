const mongoose = require("mongoose");

const userTypeSchema = new mongoose.Schema({
  user_type: String,
}, {
  collection: 'user_type'
});

const UserType = mongoose.model("UserType", userTypeSchema);

module.exports = UserType;
