// Final Converter

import React, { useState } from "react";

const unitConversions = {
  "m/s": 1,
  "km/h": 3.6,
  "mi/h": 2.23694,
  "m/h": 3600,
  "m/min": 60,
  "km/min": 0.06,
  "km/s": 0.001,
  "cm/h": 360000,
  "cm/min": 6000,
  "cm/s": 100,
  "mm/h": 3600000,
  "mm/min": 60000,
  "mm/s": 1000,
  "ft/h": 11811.0236,
  "ft/min": 196.850394,
  "ft/s": 3.28084,
  "yd/h": 39370.0787,
  "yd/min": 656.167979,
  "yd/s": 10.9361,
  "mi/min": 0.0372823,
  "mi/s": 0.000621371,
  "kt": 1.94384,
  "kt (UK)": 1.94384, // Assuming similar to kt
  "Velocity of light in vacuum": 299792458,
  "Cosmic velocity - first": 7900,
  "Cosmic velocity - second": 11200,
  "Cosmic velocity - third": 16700,
  "Earth's velocity": 29783,
  "Velocity of sound in pure water": 1500,
  "Velocity of sound in sea water (20°C, 1 atm)": 1500,
  "Mach (20°C, 1 atm)": 340,
  "Mach (SI standard)": 343,
};

const SpeedConverter2 = () => {
  const [inputValue, setInputValue] = useState(0);
  const [inputUnit, setInputUnit] = useState("m/s");
  const [outputUnit, setOutputUnit] = useState("km/h");
  const [convertedValue, setConvertedValue] = useState(0);

  const handleConversion = () => {
    const baseValue = inputValue / unitConversions[inputUnit]; // Convert input to base unit (m/s)
    const result = baseValue * unitConversions[outputUnit]; // Convert base unit to desired output unit
    setConvertedValue(result);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Speed Converter</h1>
      <div>
        <label>
          Input Value:
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(parseFloat(e.target.value) || 0)}
            style={{ margin: "10px" }}
          />
        </label>
        <label>
          From:
          <select
            value={inputUnit}
            onChange={(e) => setInputUnit(e.target.value)}
            style={{ margin: "10px" }}
          >
            {Object.keys(unitConversions).map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </label>
        <label>
          To:
          <select
            value={outputUnit}
            onChange={(e) => setOutputUnit(e.target.value)}
            style={{ margin: "10px" }}
          >
            {Object.keys(unitConversions).map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button onClick={handleConversion} style={{ margin: "10px" }}>
        Convert
      </button>
      <h2>Converted Value: {convertedValue.toFixed(6)} {outputUnit}</h2>
    </div>
  );
};

export default SpeedConverter2;
