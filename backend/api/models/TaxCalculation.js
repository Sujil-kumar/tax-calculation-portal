const mongoose = require("mongoose");

const taxCalculationSchema = new mongoose.Schema({
  annualIncome: { type: Number, required: true },
  investments: { type: Number, required: true },
  deductions: { type: Number, required: true },
  otherIncome: { type: Number, required: true },
  taxPayable: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("TaxCalculation", taxCalculationSchema);