import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  category: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model("Transaction", transactionSchema);
