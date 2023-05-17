const Computer = require("../models/computerModel");

exports.createComputer = async (req, res) => {
  try {
    const newComputer = await Computer.create(req.body);
    res.status(201).json(newComputer);
  } catch (error) {
    console.error("Computer creation error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getComputers = async (req, res) => {
  try {
    const computers = await Computer.find({});
    res.json(computers);
  } catch (error) {
    console.error("Computers retrieval error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getComputerById = async (req, res) => {
  try {
    const computer = await Computer.findById(req.params.id);
    if (!computer) {
      return res.status(404).json({ error: "Computer not found" });
    }
    res.json(computer);
  } catch (error) {
    console.error("Computer retrieval error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateComputer = async (req, res) => {
  try {
    const updatedComputer = await Computer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedComputer) {
      return res.status(404).json({ error: "Computer not found" });
    }
    res.json(updatedComputer);
  } catch (error) {
    console.error("Computer update error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteComputer = async (req, res) => {
  try {
    const deletedComputer = await Computer.findByIdAndRemove(req.params.id);
    if (!deletedComputer) {
      return res.status(404).json({ error: "Computer not found" });
    }
    res.json({ message: "Computer deleted successfully" });
  } catch (error) {
    console.error("Computer deletion error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
