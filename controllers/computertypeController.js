const ComputerType = require("../models/computerTypeModel");

exports.createComputerType = async (req, res) => {
  try {
    const newComputerType = await ComputerType.create(req.body);
    res.status(201).json(newComputerType);
  } catch (error) {
    console.error("Computer type creation error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getComputerTypes = async (req, res) => {
  try {
    const computerTypes = await ComputerType.find({});
    res.json(computerTypes);
  } catch (error) {
    console.error("Computer types retrieval error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getComputerTypeById = async (req, res) => {
  try {
    const computerType = await ComputerType.findById(req.params.id);
    if (!computerType) {
      return res.status(404).json({ error: "Computer type not found" });
    }
    res.json(computerType);
  } catch (error) {
    console.error("Computer type retrieval error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateComputerType = async (req, res) => {
  try {
    const updatedComputerType = await ComputerType.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedComputerType) {
      return res.status(404).json({ error: "Computer type not found" });
    }
    res.json(updatedComputerType);
  } catch (error) {
    console.error("Computer type update error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteComputerType = async (req, res) => {
  try {
    const deletedComputerType = await ComputerType.findByIdAndRemove(req.params.id);
    if (!deletedComputerType) {
      return res.status(404).json({ error: "Computer type not found" });
    }
    res.json({ message: "Computer type deleted successfully" });
  } catch (error) {
    console.error("Computer type deletion error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
