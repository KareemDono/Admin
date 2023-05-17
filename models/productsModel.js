const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  UPC_Code: String,
  Product_Name: String,
  Product_Picture: String,
  Description: String,
  Computer_Code: String,
  Computer_Name: String,
  Category_Code: String,
  Manufacturer_Code: String,
}, {
  collection: 'products'
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
