const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  symbol: { type: String, required: true },
  qty: { type: Number, required: true },
  price: { type: Number, required: true },
  type: { type: String, enum: ["BUY", "SELL"], required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
