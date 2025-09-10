import express from "express";
import Transaction from "../models/Transaction.js";

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  try {
    const transaction = new Transaction(req.body);
    await transaction.save();
    res.json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ all
router.get("/", async (req, res) => {
  const transactions = await Transaction.find().sort({ date: -1 });
  res.json(transactions);
});

// READ one
router.get("/:id", async (req, res) => {
  const transaction = await Transaction.findById(req.params.id);
  res.json(transaction);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const updated = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Transaction.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

export default router;
