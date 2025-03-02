import React, { useState } from "react";
import axios from "axios";

const TaxForm = ({ setResult }) => {
  const [formData, setFormData] = useState({
    annualIncome: "",
    investments: "",
    deductions: "",
    otherIncome: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/tax/calculate", formData);
      setResult(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" name="annualIncome" placeholder="Annual Income" onChange={handleChange} required />
      <input type="number" name="investments" placeholder="Investments (80C, 80D)" onChange={handleChange} required />
      <input type="number" name="deductions" placeholder="Deductions (HRA, LTA)" onChange={handleChange} required />
      <input type="number" name="otherIncome" placeholder="Income from Other Sources" onChange={handleChange} required />
      <button type="submit">Calculate Tax</button>
    </form>
  );
};

export default TaxForm;