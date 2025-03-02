import React, { useState } from "react";
import TaxForm from "./components/TaxForm";
import TaxResult from "./components/TaxResult";
import "./styles.css";

const App = () => {
  const [result, setResult] = useState(null);

  return (
    <div className="App">
      <h1>Tax Calculation Portal</h1>
      <TaxForm setResult={setResult} />
      <TaxResult result={result} />
    </div>
  );
};

export default App;