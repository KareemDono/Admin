const express = require("express");
const mongoose = require("mongoose");
const app = express();

const uri = "mongodb+srv://admin:admin@cluster0.edr434m.mongodb.net/Buildr?retryWrites=true&w=majority";

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
  });

  const orderSchema = new mongoose.Schema({
    Order_Id: String,
    Order_Name: String,
    Id: mongoose.Schema.Types.ObjectId,
  });
  
  const productSchema = new mongoose.Schema({
    UPC_Code: String,
    Product_Name: String,
    Product_Picture: String,
    Description: String,
    Computer_Code: String,
    Computer_Name: String,
    Catagory_Code: String,
    Manufacturer_Code: String,
  });
  
  const savedProductSchema = new mongoose.Schema({
    UPC_Code: String,
    Product_Name: String,
    Product_Picture: String,
    Description: String,
    Catagory_Code: String,
    Manufacturer_Code: String,
  });
  
  const manufacturerSchema = new mongoose.Schema({
    Manufacturer_Code: String,
    Manufacturer_Name: String,
  });
  
  const userTypeSchema = new mongoose.Schema({
    user_type: String,
  });
  
  const computerSchema = new mongoose.Schema({
    Computer_Code: String,
    Computer_Name: String,
  });
  
  const computerTypeSchema = new mongoose.Schema({
    Computer_Code: String,
    Gaming: Boolean,
    Office: Boolean,
    Graphic: Boolean,
  });
  
  const categorySchema = new mongoose.Schema({
    Catagory_Code: String,
    Catagory_Name: String,
  });

//models
const User = mongoose.model("User", userSchema);
const Order = mongoose.model("Order", orderSchema);
const Product = mongoose.model("Product", productSchema);
const SavedProduct = mongoose.model("SavedProduct", savedProductSchema);
const Manufacturer = mongoose.model("Manufacturer", manufacturerSchema);
const UserType = mongoose.model("UserType", userTypeSchema);
const Computer = mongoose.model("Computer", computerSchema);
const ComputerType = mongoose.model("ComputerType", computerTypeSchema);
const Category = mongoose.model("Category", categorySchema);

async function connect(){
    try{
        await mongoose.connect(uri)
        console.log("Connected to MongoDB")
    }
    catch(error){
        console.error(error);
    }
}

connect();

app.get("/users", async (req, res) => {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (error) {
      console.error("User retrieval error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get("/orders", async (req, res) => {
    try {
      const orders = await Order.find({});
      res.json(orders);
    } catch (error) {
      console.error("Orders retrieval error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  app.get("/products", async (req, res) => {
    try {
      const products = await Product.find({});
      res.json(products);
    } catch (error) {
      console.error("Products retrieval error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  app.get("/saved_products", async (req, res) => {
    try {
      const savedProducts = await SavedProduct.find({});
      res.json(savedProducts);
    } catch (error) {
      console.error("Saved products retrieval error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  app.get("/manufacturer", async (req, res) => {
    try {
      const manufacturers = await Manufacturer.find({});
      res.json(manufacturers);
    } catch (error) {
      console.error("Manufacturers retrieval error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  app.get("/user_types", async (req, res) => {
    try {
      const userTypes = await UserType.find({});
      res.json(userTypes);
    } catch (error) {
      console.error("User types retrieval error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  app.get("/computer", async (req, res) => {
    try {
      const computers = await Computer.find({});
      res.json(computers);
    } catch (error) {
      console.error("Computers retrieval error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  app.get("/computer_types", async (req, res) => {
    try {
      const computerTypes = await ComputerType.find({});
      res.json(computerTypes);
    } catch (error) {
      console.error("Computer types retrieval error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  app.get("/category", async (req, res) => {
    try {
      const categories = await Category.find({});
      res.json(categories);
    } catch (error) {
      console.error("Categories retrieval error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

app.listen(8000, () => {
    console.log("Server started on port 8000");
})

