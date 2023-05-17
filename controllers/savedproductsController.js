const SavedProduct = require("../models/savedproductsModel");

exports.createSavedProduct = async (req, res) => {
  try {
    const newSavedProduct = await SavedProduct.create(req.body);
    res.status(201).json(newSavedProduct);
  } catch (error) {
    console.error("Saved product creation error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getSavedProducts = async (req, res) => {
  try {
    const savedProducts = await SavedProduct.find({});
    res.json(savedProducts);
  } catch (error) {
    console.error("Saved products retrieval error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getSavedProductById = async (req, res) => {
  try {
    const savedProduct = await SavedProduct.findById(req.params.id);
    if (!savedProduct) {
      return res.status(404).json({ error: "Saved product not found" });
    }
    res.json(savedProduct);
  } catch (error) {
    console.error("Saved product retrieval error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateSavedProduct = async (req, res) => {
  try {
    const updatedSavedProduct = await SavedProduct.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedSavedProduct) {
      return res.status(404).json({ error: "Saved product not found" });
    }
    res.json(updatedSavedProduct);
  } catch (error) {
    console.error("Saved product update error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteSavedProduct = async (req, res) => {
  try {
    const deletedSavedProduct = await SavedProduct.findByIdAndRemove(req.params.id);
    if (!deletedSavedProduct) {
      return res.status(404).json({ error: "Saved product not found" });
    }
    res.json({ message: "Saved product deleted successfully" });
  } catch (error) {
    console.error("Saved product deletion error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
