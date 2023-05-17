const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  username: String,
  email: String,
  phone_number: String,
  birth_date: Date,
  city: String,
  password: String,
  user_type: String,
}, {
  collection: 'users'
});

const User = mongoose.model("User", userSchema);

module.exports = User;
