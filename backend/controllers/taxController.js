const TaxCalculation = require("../models/TaxCalculation");

// Calculate tax
exports.calculateTax = (req, res) => {
  const { annualIncome, investments, deductions, otherIncome } = req.body;

  // Tax calculation logic (as per Indian tax slabs FY 2024-25)
  const taxableIncome = annualIncome + otherIncome - (investments + deductions);
  let tax = 0;

  if (taxableIncome <= 250000) tax = 0;
  else if (taxableIncome <= 500000) tax = (taxableIncome - 250000) * 0.05;
  else if (taxableIncome <= 1000000) tax = 12500 + (taxableIncome - 500000) * 0.2;
  else tax = 112500 + (taxableIncome - 1000000) * 0.3;

  const response = {
    taxableIncome,
    taxPayable: tax,
    taxSavings: "Consider investing more in 80C to reduce tax liability.",
  };

  res.json(response);
};

// Save tax calculation to database
exports.saveCalculation = async (req, res) => {
  const { annualIncome, investments, deductions, otherIncome, taxPayable } = req.body;

  const newCalculation = new TaxCalculation({
    annualIncome,
    investments,
    deductions,
    otherIncome,
    taxPayable,
  });

  await newCalculation.save();
  res.status(201).json({ message: "Calculation saved successfully" });
};

// Get past tax calculations
exports.getCalculations = async (req, res) => {
  const calculations = await TaxCalculation.find().sort({ createdAt: -1 });
  res.json(calculations);
};