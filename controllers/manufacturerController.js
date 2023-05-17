const Manufacturer = require("../models/manufacturerModel");

exports.createManufacturer = async (req, res) => {
  try {
    const newManufacturer = await Manufacturer.create(req.body);
    res.status(201).json(newManufacturer);
  } catch (error) {
    console.error("Manufacturer creation error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getManufacturers = async (req, res) => {
  try {
    const manufacturers = await Manufacturer.find({});
    res.json(manufacturers);
  } catch (error) {
    console.error("Manufacturers retrieval error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getManufacturerById = async (req, res) => {
  try {
    const manufacturer = await Manufacturer.findById(req.params.id);
    if (!manufacturer) {
      return res.status(404).json({ error: "Manufacturer not found" });
    }
    res.json(manufacturer);
  } catch (error) {
    console.error("Manufacturer retrieval error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateManufacturer = async (req, res) => {
  try {
    const updatedManufacturer = await Manufacturer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedManufacturer) {
      return res.status(404).json({ error: "Manufacturer not found" });
    }
    res.json(updatedManufacturer);
  } catch (error) {
    console.error("Manufacturer update error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteManufacturer = async (req, res) => {
  try {
    const deletedManufacturer = await Manufacturer.findByIdAndRemove(req.params.id);
    if (!deletedManufacturer) {
      return res.status(404).json({ error: "Manufacturer not found" });
    }
    res.json({ message: "Manufacturer deleted successfully" });
  } catch (error) {
    console.error("Manufacturer deletion error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
