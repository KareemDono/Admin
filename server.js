const express = require("express");
const { MongoClient } = require("mongodb");
const userRoutes = require("./routes/userRoute");

const app = express();
app.use(express.json());

const uri = "mongodb+srv://admin:admin@cluster0.edr434m.mongodb.net/Buildr?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use("/users", userRoutes);

app.get("/users", userRoutes.getUsers);
app.post("/users", userRoutes.createUser);
app.get("/users/:id", userRoutes.getUserById);
app.put("/users/:id", userRoutes.updateUser);
app.delete("/users/:id", userRoutes.deleteUser);


const startServer = async () => {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB");

    // Start the server
    const port = 3000;
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

startServer();
