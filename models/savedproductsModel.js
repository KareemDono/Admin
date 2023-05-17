const mongoose = require("mongoose");

const savedProductSchema = new mongoose.Schema({
  UPC_Code: String,
  Product_Name: String,
  Product_Picture: String,
  Description: String,
  Category_Code: String,
  Manufacturer_Code: String,
}, {
  collection: 'saved_products'
});

const SavedProduct = mongoose.model("SavedProduct", savedProductSchema);

module.exports = SavedProduct;
