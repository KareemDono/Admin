const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  Order_Id: String,
  Order_Name: String,
  Id: mongoose.Schema.Types.ObjectId,
}, {
  collection: 'orders'
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
