import React, { useState } from "react";

const Base = () => {
  const [inputValue, setInputValue] = useState("");
  const [fromBase, setFromBase] = useState(10); // Default: Decimal
  const [toBase, setToBase] = useState(2); // Default: Binary
  const [result, setResult] = useState("");

  // Function to handle conversion
  const convertBase = (value, fromBase, toBase) => {
    if (!value) return "";
    try {
      // Step 1: Convert input to base-10 (decimal)
      const decimalValue = parseInt(value, fromBase);

      // Step 2: Convert decimal to target base
      const convertedValue = decimalValue.toString(toBase);

      return convertedValue.toUpperCase(); // For uniformity (e.g., hexadecimal letters)
    } catch (error) {
      return "Invalid input!";
    }
  };

  const handleConvert = () => {
    const resultValue = convertBase(inputValue, fromBase, toBase);
    setResult(resultValue);
  };

  return (
    <div className="text-mattBlack text-xl" style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Base Converter</h1>
      <div>
        <label>
          Input Value:
          <input
          className="bg-leadGrey"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a number"
          />
        </label>
      </div>
      <div>
        <label>
          From Base:
          <input
            className="bg-leadGrey"
            type="number"
            value={fromBase}
            onChange={(e) => setFromBase(Number(e.target.value))}
            min="2"
            max="36"
          />
        </label>
      </div>
      <div>
        <label>
          To Base:
          <input
          className="bg-leadGrey"
            type="number"
            value={toBase}
            onChange={(e) => setToBase(Number(e.target.value))}
            min="2"
            max="36"
          />
        </label>
      </div>
      <button className="bg-mattBlack px-5 py-2 mt-2 rounded-lg text-leadGrey" onClick={handleConvert}>Convert</button>
      <h3>Result: {result}</h3>
    </div>
  );
};

export default Base;
