const mongoose = require("mongoose");

const manufacturerSchema = new mongoose.Schema({
  Manufacturer_Code: String,
  Manufacturer_Name: String,
}, {
  collection: 'manufacturer'
});

const Manufacturer = mongoose.model("Manufacturer", manufacturerSchema);

module.exports = Manufacturer;
