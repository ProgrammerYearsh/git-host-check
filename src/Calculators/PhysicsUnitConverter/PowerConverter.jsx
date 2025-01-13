// Power Converter Component
import React, { useState } from 'react';

const PowerConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputUnit, setInputUnit] = useState('W'); // Default input unit: watt
  const [outputUnit, setOutputUnit] = useState('W'); // Default output unit: watt
  const [outputValue, setOutputValue] = useState('');

  const powerConversions = {
    'W': 1,
    'EW': 1e18,
    'PW': 1e15,
    'TW': 1e12,
    'GW': 1e9,
    'MW': 1e6,
    'kW': 1e3,
    'hW': 1e2,
    'daW': 1e1,
    'dW': 1e-1,
    'CW': 1e-2,
    'mW': 1e-3,
    'μW': 1e-6,
    'nW': 1e-9,
    'pW': 1e-12,
    'fW': 1e-15,
    'aW': 1e-18,
    'hp': 745.7,
    'hp (UK)': 745.7,
    'hp (550 ft*lbf/s)': 745.7,
    'hp (metric)': 735.5,
    'hp (boiler)': 9809.5,
    'hp (electric)': 746,
    'hp (water)': 746,
    'ps': 735.5,
    'Btu/h': 0.293071,
    'Btu/min': 17.5842,
    'Btu/s': 1055.06,
    'Btu (th)/h': 0.293071,
    'Btu (th)/min': 17.5842,
    'Btu (th)/s': 1055.06,
    'MBtu/h': 293071,
    'MBH': 293071,
    'ton (refrigeration)': 3516.85,
    'kcal/h': 1.163,
    'kcal/min': 69.78,
    'kcal/s': 4186.8,
    'cal/h': 0.001163,
    'cal/min': 0.06978,
    'cal/s': 4.1868,
    'ft*lbf/h': 0.000376616,
    'ft*lbf/min': 0.0225969,
    'ft*lbf/s': 1.35582,
    'lbf*ft/h': 0.000376616,
    'lbf*ft/min': 0.0225969,
    'lbf*ft/s': 1.35582,
    'erg/s': 1e-7,
    'kV*A': 1000,
    'V*A': 1,
    'N*m/s': 1,
    'J/s': 1,
    'EJ/s': 1e18,
    'PJ/s': 1e15,
    'TJ/s': 1e12,
    'GJ/s': 1e9,
    'MJ/s': 1e6,
    'kJ/s': 1e3,
    'hJ/s': 1e2,
    'daJ/s': 1e1,
    'dJ/s': 1e-1,
    'cJ/s': 1e-2,
    'mJ/s': 1e-3,
    'μJ/s': 1e-6,
    'nJ/s': 1e-9,
    'pJ/s': 1e-12,
    'fJ/s': 1e-15,
    'aJ/s': 1e-18,
    'J/h': 2.77778e-4,
    'J/min': 0.0166667,
    'kJ/h': 0.277778,
    'kJ/min': 16.6667,
  };

  const convertPower = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) {
      setOutputValue('Invalid input');
      return;
    }

    // Convert input to watts (base unit)
    const valueInWatts = value * powerConversions[inputUnit];

    // Convert from watts to the output unit
    const result = valueInWatts / powerConversions[outputUnit];

    setOutputValue(result.toFixed(6)); // Set output value with precision
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Power Unit Converter</h2>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Input Value:
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>
          From:
          <select
            value={inputUnit}
            onChange={(e) => setInputUnit(e.target.value)}
            style={{ marginLeft: '10px' }}
          >
            {Object.keys(powerConversions).map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>
          To:
          <select
            value={outputUnit}
            onChange={(e) => setOutputUnit(e.target.value)}
            style={{ marginLeft: '10px' }}
          >
            {Object.keys(powerConversions).map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </label>
      </div>

      <button onClick={convertPower} style={{ marginBottom: '10px', padding: '5px 10px' }}>
        Convert
      </button>

      <div>
        <strong>Output Value:</strong> {outputValue} {outputUnit}
      </div>
    </div>
  );
};

export default PowerConverter;
