const express = require("express");
const mongoose = require("mongoose");
const userController = require("./controllers/userController");
const orderController = require("./controllers/orderController");
const productController = require("./controllers/productsController");
const savedProductController = require("./controllers/savedproductsController");
const manufacturerController = require("./controllers/manufacturerController");
const userTypeController = require("./controllers/usertypeController");
const computerController = require("./controllers/computerController");
const computerTypeController = require("./controllers/computertypeController");
const categoryController = require("./controllers/categoryController");
const app = express();


const uri = "mongodb+srv://admin:admin@cluster0.edr434m.mongodb.net/Buildr?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Users routes
app.get("/users", userController.getUsers);
app.post("/users", userController.createUser);
app.get("/users/:id", userController.getUserById);
app.put("/users/:id", userController.updateUser);
app.delete("/users/:id", userController.deleteUser);

// Orders routes
app.get("/orders", orderController.getOrders);
app.post("/orders", orderController.createOrder);
app.get("/orders/:id", orderController.getOrderById);
app.put("/orders/:id", orderController.updateOrder);
app.delete("/orders/:id", orderController.deleteOrder);

// Products routes
app.get("/products", productController.getProducts);
app.post("/products", productController.createProduct);
app.get("/products/:id", productController.getProductById);
app.put("/products/:id", productController.updateProduct);
app.delete("/products/:id", productController.deleteProduct);

// Saved products routes
app.get("/saved_products", savedProductController.getSavedProducts);
app.post("/saved_products", savedProductController.createSavedProduct);
app.get("/saved_products/:id", savedProductController.getSavedProductById);
app.put("/saved_products/:id", savedProductController.updateSavedProduct);
app.delete("/saved_products/:id", savedProductController.deleteSavedProduct);

// Manufacturer routes
app.get("/manufacturer", manufacturerController.getManufacturers);
app.post("/manufacturer", manufacturerController.createManufacturer);
app.get("/manufacturer/:id", manufacturerController.getManufacturerById);
app.put("/manufacturer/:id", manufacturerController.updateManufacturer);
app.delete("/manufacturer/:id", manufacturerController.deleteManufacturer);

// User types routes
app.get("/user_type", userTypeController.getUserTypes);
app.post("/user_type", userTypeController.createUserType);
app.get("/user_type/:id", userTypeController.getUserTypeById);
app.put("/user_type/:id", userTypeController.updateUserType);
app.delete("/user_type/:id", userTypeController.deleteUserType);

// Computer routes
app.get("/computer", computerController.getComputers);
app.post("/computer", computerController.createComputer);
app.get("/computer/:id", computerController.getComputerById);
app.put("/computer/:id", computerController.updateComputer);
app.delete("/computer/:id", computerController.deleteComputer);

// Computer types routes
app.get("/computer_type", computerTypeController.getComputerTypes);
app.post("/computer_type", computerTypeController.createComputerType);
app.get("/computer_type/:id", computerTypeController.getComputerTypeById);
app.put("/computer_type/:id", computerTypeController.updateComputerType);
app.delete("/computer_type/:id", computerTypeController.deleteComputerType);

// Category routes
app.get("/category", categoryController.getCategories);
app.post("/category", categoryController.createCategory);
app.get("/category/:id", categoryController.getCategoryById);
app.put("/category/:id", categoryController.updateCategory);
app.delete("/category/:id", categoryController.deleteCategory);


const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


//עדיין לא חשבנו על איזה סטטיסטיקות מסוימות אבל ככה זה נעשה

// route to retrieve data
app.get("/api/data", (req, res) => {
  // retrieve the data that we  are interested in:

  //Example: retrieve the data from all collections
  UserController.getUsers(req, res);

  OrderController.getOrders(req, res);

  ProductController.getProducts(req, res);

  CategoryController.getCategories(req, res);

  ComputerController.getComputers(req, res);

  ComputerTypeController.getComputerTypes(req, res);

  ManufacturerController.getManufacturers(req, res);

  SavedProductController.getSavedProducts(req, res);

  UserTypeController.getUserTypes(req, res);
});