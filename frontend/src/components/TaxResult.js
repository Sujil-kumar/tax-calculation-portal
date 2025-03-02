import React from "react";

const TaxResult = ({ result }) => {
  if (!result) return null;

  return (
    <div>
      <h2>Tax Calculation Result</h2>
      <p>Taxable Income: ₹{result.taxableIncome}</p>
      <p>Tax Payable: ₹{result.taxPayable}</p>
      <p>Tax Savings Suggestion: {result.taxSavings}</p>
    </div>
  );
};

export default TaxResult;