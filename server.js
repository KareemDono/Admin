const express = require("express");
const userModel = require("./models/userModel");
const userController = require("./controllers/userController");
const app = express();

app.use(express.json());

app.get("/users", userController.getUsers);
app.post("/users", userController.createUser);
app.get("/users/:id", userController.getUserById);
app.put("/users/:id", userController.updateUser);
app.delete("/users/:id", userController.deleteUser);

userModel.connectToMongo()
  .then(() => {
    const port = 3000;
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
