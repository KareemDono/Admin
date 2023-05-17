const UserType = require("../models/userTypeModel");

exports.createUserType = async (req, res) => {
  try {
    const newUserType = await UserType.create(req.body);
    res.status(201).json(newUserType);
  } catch (error) {
    console.error("User type creation error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getUserTypes = async (req, res) => {
  try {
    const userTypes = await UserType.find({});
    res.json(userTypes);
  } catch (error) {
    console.error("User types retrieval error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getUserTypeById = async (req, res) => {
  try {
    const userType = await UserType.findById(req.params.id);
    if (!userType) {
      return res.status(404).json({ error: "User type not found" });
    }
    res.json(userType);
  } catch (error) {
    console.error("User type retrieval error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateUserType = async (req, res) => {
  try {
    const updatedUserType = await UserType.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUserType) {
      return res.status(404).json({ error: "User type not found" });
    }
    res.json(updatedUserType);
  } catch (error) {
    console.error("User type update error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteUserType = async (req, res) => {
  try {
    const deletedUserType = await UserType.findByIdAndRemove(req.params.id);
    if (!deletedUserType) {
      return res.status(404).json({ error: "User type not found" });
    }
    res.json({ message: "User type deleted successfully" });
  } catch (error) {
    console.error("User type deletion error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
