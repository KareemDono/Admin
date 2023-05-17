const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  Category_Code: String,
  Category_Name: String,
}, {
  collection: 'category'
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
